type Army = {
    armName: string;
    count: number;
};

type LeaderInfo = {
    totalCount: number;
    armies: Army[];
};

function armies(arrInput: string[]): string {
    const objArmies: { [leader: string]: LeaderInfo } = {};
    const result: string[] = [];

    for (const input of arrInput) {
        if (input.includes('arrives')) {
            const leader = input.replace(' arrives', '').trim();
            objArmies[leader] = { totalCount: 0, armies: [] };
        } else if (input.includes('defeated')) {
            const leader = input.replace(' defeated', '').trim();
            delete objArmies[leader];
        } else if (input.includes(':')) {
            const [leader, armInfo] = input.split(': ');
            const [armName, countStr] = armInfo.split(', ');
            const count = parseInt(countStr.trim()); 
            const objLeader: Army = { armName: armName.trim(), count };
            if (leader in objArmies) {
                objArmies[leader].armies.push(objLeader);
                objArmies[leader].totalCount += count;
            }
        } else if (input.includes('+')) {
            const [armName, countStr] = input.split(' + ');
            const count = parseInt(countStr.trim()); 
            for (const [leader, armInfo] of Object.entries(objArmies)) {
                const foundIndex = armInfo.armies.findIndex(arm => arm.armName === armName.trim());

                if (foundIndex >= 0) {
                    objArmies[leader].totalCount += count;
                    objArmies[leader].armies[foundIndex].count += count;
                    break;
                }
            }
        }
    }

    const sortedArmies = Object.entries(objArmies).sort((a, b) => b[1].totalCount - a[1].totalCount);

    sortedArmies.forEach(([leader, objArm]) => {
        result.push(`${leader}: ${objArm.totalCount}`);
        objArm.armies.sort((a, b) => b.count - a.count);
        objArm.armies.forEach(arm => {
            result.push(`>>> ${arm.armName} - ${arm.count}`);
        });
    });

    return result.join('\n');
}
