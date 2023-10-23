export function getFilterVideo(videolist, value){
    const mapvideolist = videolist.filter((video) => video.type === value);
    return mapvideolist
}