// BEGIN
const getBrowserInfo = (browserUrl) => {
    const informationAbotBrowser = navigator.userAgent.split(' ')[0].split('/');
    let userBrowerName = informationAbotBrowser[0];
    let userBrowserVersion = informationAbotBrowser[1];
    return `${userBrowerName}/${userBrowserVersion} ${browserUrl}`;
}


export default getBrowserInfo;
// END