type BrowserHistory = {
    'Browser Name': string,
    'Open Tabs': string[],
    'Recently Closed': string[],
    'Browser Logs': string[]
}

function browserHistory(object: BrowserHistory, arrString: string[]): string {
    for (const command of arrString) {
        if (command.startsWith('Open')) {
            object['Open Tabs'].push(command.substring(5))
        } else if (command.startsWith('Close')) {
            const site = command.substring(6)
            if (object['Open Tabs'].includes(site)) {
                object['Recently Closed'].push(site)
                const index = object['Open Tabs'].findIndex(item => item === site)
                object['Open Tabs'].splice(index, 1)
            } else {
                continue
            }
        } else if (command === 'Clear History and Cache') {
            object['Open Tabs'].splice(0, object['Open Tabs'].length)
            object['Recently Closed'].splice(0, object['Recently Closed'].length)
            object['Browser Logs'].splice(0, object['Browser Logs'].length)
            continue
        }

        object['Browser Logs'].push(command)
    }

    return `${object['Browser Name']}\nOpen Tabs: ${object['Open Tabs'].join(', ')}\nRecently Closed: ${object['Recently Closed'].join(', ')}\nBrowser Logs: ${object['Browser Logs'].join(', ')}`
}
