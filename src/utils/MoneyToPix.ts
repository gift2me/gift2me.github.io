function convertMoneyToPixURL(number: number): string {
    let myMap = new Map<number, string>([ 
        [0, "https://nubank.com.br/cobrar/130lu8/6594917b-32af-4bf1-bdfb-40690904f60e"],
        [50, "https://nubank.com.br/cobrar/130lu8/6594906f-711c-4a17-9250-14eff7d7cf98"],
        [80, "https://nubank.com.br/cobrar/130lu8/6594908f-ad94-47a5-9349-43b87311e195"],
        [150, "https://nubank.com.br/cobrar/130lu8/659490ac-328e-4cad-8d5a-ed5f520bb383"],
        [200, "https://nubank.com.br/cobrar/130lu8/659490cb-51c6-4eb7-ab33-45d30d32b71a"],
        [300, "https://nubank.com.br/cobrar/130lu8/65949107-357a-4a4c-b025-c5b0c22699c9"],
        [600, "https://nubank.com.br/cobrar/130lu8/6594912e-4382-4b45-a63a-7249600a1308"],
        [800, "https://nubank.com.br/cobrar/130lu8/65949155-8d5c-4072-9b00-577c0d11deb4"]
    ]);
    
    return myMap.get(number) || "https://nubank.com.br/cobrar/130lu8/6594917b-32af-4bf1-bdfb-40690904f60e";
}

export default convertMoneyToPixURL