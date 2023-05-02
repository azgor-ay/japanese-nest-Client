const chefs = async() =>{
    const chefsData = await fetch('https://japanesenest-server-yeasin86.vercel.app/chefs')
    const data = await chefsData.json()
    return data; 
}

const feedBack = async() =>{
    const feedBacks = await fetch('https://japanesenest-server-yeasin86.vercel.app/feedback')
    const data = await feedBacks.json()
    return data; 
}

const homePageData = () =>{
    const chefsData = chefs()
    const feedBacks = feedBack()

    return {chefsData, feedBacks}
}

export default homePageData; 