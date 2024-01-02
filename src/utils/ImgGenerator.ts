function generateImageUrlByCaption(id: string, caption: string): string {
    let formattedCaption = caption.toLowerCase().replace(/\s+/g, '-')
    return `https://via.placeholder.com/300/${formattedCaption+id}`
    //return   `https://picsum.photos/300/200?caption=${formattedCaption}`
  }
  
export default generateImageUrlByCaption