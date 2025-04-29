// youtubeアカウント情報を取得
export async function fetchYTProfileData() {
  // アカウント情報を取得
  // const fetchYTData = await fetch(
  //   `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCh4boc9_9Dxiz9QP_VkwGww&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // 登録者数を取得
  // SSR
  const fetchSubscribe = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCh4boc9_9Dxiz9QP_VkwGww&key=${process.env.YOUTUBE_API_KEY}`,
    { cache: "no-store" }
  );
  // const YTData = await fetchYTData.json();
  const subscribe = await fetchSubscribe.json();
  // return YTData;
  return subscribe;
}
