exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  res.redirect(`https://www.baidu.com/s?wd=site%3Ayanwenbo.cn%20${q}`);
  // res.redirect(`https://cn.bing.com/search?q=site:yanwenbo.cn+${q}`);
  // res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);
};