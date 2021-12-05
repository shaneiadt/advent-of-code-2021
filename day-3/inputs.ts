export const getBinaryReport = async (path: string) => {
    const text = await Deno.readTextFile(path);

    const report = [];
    let line: string[] = [];

    for (const char of text) {
        if (char === '1' || char === '0') return line.push(char);

        if (line.length !== 0) report.push(line);
        line = [];
    }

    return report;
}


console.log(getBinaryReport('./example.txt'));