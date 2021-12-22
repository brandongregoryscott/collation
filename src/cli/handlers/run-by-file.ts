import { isEmpty } from "lodash";
import { Context } from "../../models/context";
import { alphabetizeInterfaces } from "../../rules/alphabetize-interfaces";
import { alphabetizeJsxProps } from "../../rules/alphabetize-jsx-props";
import { fuzzyFindFile } from "../../utils/fuzzy-find-file";
import { Logger } from "../../utils/logger";
import { printRuleResults } from "../../utils/print-rule-results";

const runByFile = async () => {
    const { project } = Context;
    const { file: filePath } = Context.cliOptions;

    if (filePath == null) {
        return;
    }

    const file = project.getSourceFile(filePath);
    if (file == null) {
        const similarResults = fuzzyFindFile(filePath, project);
        const notFoundError = `File ${filePath} not found in project.`;
        if (isEmpty(similarResults)) {
            Logger.error(notFoundError);
            process.exit(1);
        }

        Logger.error(`${notFoundError} Did you mean one of these?`).json(
            similarResults
        );
        process.exit(1);
    }

    const results = await Promise.all([
        alphabetizeInterfaces(file),
        alphabetizeJsxProps(file),
    ]);

    printRuleResults(results);

    await Context.saveIfNotDryRun();
    process.exit(0);
};

export { runByFile };