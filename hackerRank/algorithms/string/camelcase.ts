function camelcase(s: string): number {
    return s.split("").filter(l => {
        const charCode = l.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return l;
        }
    }).length + 1;

}