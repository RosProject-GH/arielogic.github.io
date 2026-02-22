function doGet(e) {
  
  // 2. ページパラメータとタイトル設定
  var page = (e && e.parameter && e.parameter.page) ? e.parameter.page : 'home';
  var titles = {
    home: 'Arielogic',
    about: 'このサイトについて',
    header: 'header',
    member: '開発者、技術提供',
  };

  // 3. テンプレート作成 & 変数を渡す
  var template = HtmlService.createTemplateFromFile(page + '.html');

  // 4. HTML を評価して返す（return はここだけ）
  return template.evaluate()
    .setTitle(titles[page])
    .setFaviconUrl("https://raw.githubusercontent.com/Schoolife-official/Schoolife-images/refs/heads/main/Arielogic-logo2.png");
}
function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
