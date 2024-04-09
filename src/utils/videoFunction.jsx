export function getFilterVideo(videolist, value) {
  if (!videolist || !value) return [];
  const mapvideolist = videolist.filter((video) => video.type === value);
  return mapvideolist;
}
