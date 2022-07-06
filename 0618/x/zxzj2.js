{
  "author": "takagen99",
  "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  "homeUrl": "https://www.zxzjtv.com/",
  "cateManual": {
    "电影": "1",
    "美剧": "2",
    "韩剧": "3",
    "日剧": "4",
    "泰剧": "5",
    "动漫": "6"
  },
  // Home Summary ================================================  
  "homeVodNode": "//div[@class='stui-vodlist__box']",
  "homeVodName": "/a/@title",
  "homeVodId": "/a/@href",
  "homeVodIdR": "/detail/(\\w+)",
  "homeVodImg": "/a/@data-original",
  "homeVodMark": "/a/span[@class='pic-text text-right']/text()",
  // Category Summary ================================================    
  "cateUrl": "https://www.zxzjtv.com/vodshow/{cateId}-{area}--{class}-----{catePg}---{year}.html",
  "cateVodNode": "//ul[@class='stui-vodlist clearfix']/li/div[@class='stui-vodlist__box']",
  "cateVodName": "/a/@title",
  "cateVodId": "/a/@href",
  "cateVodIdR": "/detail/(\\w+).html",
  "cateVodImg": "/a/@data-original",
  "cateVodMark": "/a/span[@class='pic-text text-right']/text()",
  // Category Details ================================================    
  "dtUrl": "https://www.zxzjtv.com/detail/{vid}.html",
  "dtNode": "//div[@class='stui-pannel__bd']",
  "dtName": "//div[@class='stui-content__thumb']/a/@title",
  "dtImg": "//div[@class='stui-content__thumb']/a/img/@data-original",
  "dtCate": "",
  "dtYear": "",
  "dtArea": "",
  "dtActor": "//div[@class='stui-content__detail']/p[2]/text()",
  "dtMark": "//div[@class='stui-content__detail']/p[4]/text()",
  "dtDirector": "//div[@class='stui-content__detail']/p[3]/text()",
  "dtDesc": "//span[@class='detail-sketch']/text()",
  // Playlist =====================================================     
  //  "dtFromNode": "//div[@class='stui-vodlist__head' and not(contains(text(),'猜你喜欢'))]",
  //  "dtFromName": "//h3",    												// number must match
  "dtFromNode": "//h3",
  "dtFromName": "[substring-before(text(),'(')]",
  "dtFromNameR": "(.+) \\(\\S+",
  "dtUrlNode": "//ul[contains(@class,'stui-content__playlist clearfix')]", // number must match
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/video/(\\S+).html",
  "dtUrlName": "/text()",
  "playUrl": "https://www.zxzjtv.com/video/{playUrl}.html",
  "playUa": "",
  // Search Results ================================================         
  "searchUrl": "https://www.zxzjtv.com/search/-------------.html?wd={wd}&submit=",
  "scVodNode": "//div[@class='stui-vodlist__box']",
  "scVodName": "/a/@title",
  "scVodId": "/a/@href",
  "scVodIdR": "/detail/(\\w+).html",
  "scVodImg": "/a/@data-original",
  "scVodMark": "/a/span[@class='pic-text text-right']/text()",
  // Filters =======================================================
  "filter": {
      "1": [
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "喜剧","v": "喜剧"},
            {"n": "爱情","v": "爱情"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "动作","v": "动作"},
            {"n": "科幻","v": "科幻"},
            {"n": "剧情","v": "剧情"},
            {"n": "战争","v": "战争"},
            {"n": "警匪","v": "警匪"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "动画","v": "动画"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "冒险","v": "冒险"}
          ]
        },
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "大陆","v": "大陆"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},        
            {"n": "欧美","v": "欧美"},
            {"n": "韩国","v": "韩国"},
            {"n": "日本","v": "日本"},
            {"n": "泰国","v": "泰国"},
            {"n": "印度","v": "印度"},
            {"n": "俄罗斯","v": "俄罗斯"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"},
            {"n": "2007","v": "2007"},
            {"n": "2006","v": "2006"},
            {"n": "2005","v": "2005"},
            {"n": "2004","v": "2004"},
            {"n": "2003","v": "2003"},
            {"n": "2002","v": "2002"},
            {"n": "2001","v": "2001"},
            {"n": "2000","v": "2000"}
          ]
        }
      ],
      "2": [
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "剧情","v": "剧情"},
            {"n": "喜剧","v": "喜剧"},
            {"n": "爱情","v": "爱情"},
            {"n": "动作","v": "动作"},
            {"n": "悬疑","v": "悬疑"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "惊悚","v": "惊悚"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "科幻","v": "科幻"},
            {"n": "音乐","v": "音乐"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"}
          ]
        }
      ],
      "3": [
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "剧情","v": "剧情"},
            {"n": "喜剧","v": "喜剧"},
            {"n": "爱情","v": "爱情"},
            {"n": "动作","v": "动作"},
            {"n": "悬疑","v": "悬疑"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "惊悚","v": "惊悚"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "科幻","v": "科幻"},
            {"n": "音乐","v": "音乐"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"}
          ]
        }
      ],
      "4": [
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "剧情","v": "剧情"},
            {"n": "喜剧","v": "喜剧"},
            {"n": "爱情","v": "爱情"},
            {"n": "动作","v": "动作"},
            {"n": "悬疑","v": "悬疑"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "惊悚","v": "惊悚"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "科幻","v": "科幻"},
            {"n": "音乐","v": "音乐"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"}
          ]
        }
      ],
      "5": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"}
          ]
        }
      ],
      "6": [
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "情感","v": "情感"},
            {"n": "科幻","v": "科幻"},
            {"n": "热血","v": "热血"},
            {"n": "推理","v": "推理"},
            {"n": "搞笑","v": "搞笑"},
            {"n": "冒险","v": "冒险"},
            {"n": "萝莉","v": "萝莉"},
            {"n": "校园","v": "校园"},
            {"n": "动作","v": "动作"},
            {"n": "机战","v": "机战"},
            {"n": "运动","v": "运动"},
            {"n": "战争","v": "战争"},
            {"n": "少年","v": "少年"}
          ]
        },
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "国产","v": "国产"},
            {"n": "日本","v": "日本"},
            {"n": "欧美","v": "欧美"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"}
          ]
        }
      ]
    }
}