import { isEqual, sortBy } from "lodash";
import { InterfaceDeclaration, SourceFile } from "ts-morph";
import shell from "shelljs";

const alphabetizeInterfaces = (file: SourceFile) => {
    const interfaces = file.getInterfaces();
    interfaces.forEach(alphabetizeInterface);
};

const alphabetizeInterface = (_interface: InterfaceDeclaration) => {
    const properties = _interface.getProperties();
    const sorted = sortBy(properties, (e) => e.getName());

    if (isEqual(properties, sorted)) {
        const fileName = _interface.getSourceFile().getBaseName();
        const lineNumber = _interface.getStartLinePos();
        shell.echo(
            `Properties of interface ${_interface.getName()} on line ${lineNumber} of ${fileName} are already sorted.`
        );
        return;
    }

    properties.forEach((property) =>
        property.setOrder(sorted.indexOf(property))
    );
};

export { alphabetizeInterfaces };