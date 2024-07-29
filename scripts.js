/* 웹폰트 임포트 */
@import url("https://cdn.jsdelivr.net/gh/TetraTheta/RIDIBatang-subset/dist/style/RIDIBatang-subset-web.css");
@import url("https://statics.goorm.io/fonts/GoormSans/v1.0.0/GoormSans.min.css");
@import url("https://cdn.jsdelivr.net/gh/neodgm/neodgm-pro-webfont@1.020/neodgm_pro/style.css");

/* 기본 설정 */
body {
    background-color: var(--bg-color, #ffffff);
    color: var(--text-color, #000000);
    line-height: 1.85; /* 줄간격 */
    font-size: 18px;  /* 폰트 크기 */
}

/* 폰트 설정 */
.font1 {
    font-family: 'RIDIBatang-subset', serif;
}
.font2 {
    font-family: 'Goorm Sans', sans-serif;
}
.font3 {
    font-family: 'NeoDunggeunmo Pro', cursive;
    font-size: 16px;
}

/* 테마 설정 */
.theme1 {
    --bg-color: #eeeeee;
    --text-color: #444444;    
    --translation-color: #444444;
    --original-color: #666666;
}
.theme2 {
    --bg-color: #1e1e1e;
    --text-color: #ffffff;    
    --translation-color: #ffffff;
    --original-color: #aaaaaa;
}
.theme3 {
    --bg-color: #f4ecd8;
    --text-color: #5b4636;    
    --translation-color: #5b4636;
    --original-color: #8e7d63;
}
.theme4 {
    --bg-color: #242F29;
    --text-color: #dcdcdc;    
    --translation-color: #dcdcdc;
    --original-color: #99AAA1;
}

/* 기타 스타일 설정 */
.container {
    max-width: 740px;
    margin: 0 auto;
    padding: 20px;
}
#content {
    background-color: var(--container-bg-color, none);
    padding: 40px;
    border-radius: 5px;
    line-height: 1.8; /* 줄간격 설정 */
}
.translation {
    margin-bottom: 10px; /* 문단 간격 */
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    color: var(--translation-color, #000000); /* 폰트 색상 */
}
.translation:hover {
    text-decoration: underline;
}
.original {
    display: none;
    margin-left: 20px;
    color: var(--original-color, #666666); /* 폰트 색상 */
    font-size: 0.95em;
    border-left: 3px solid #757575;
    padding-left: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.6;
}
h1 {
    color: #4a4a4a;
    text-align: center;
    margin-bottom: 24px;
}
.file-input {
    display: block;
    margin: 20px auto;
    padding: 10px;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 5px;
    stroke: #FFFFFF;
    cursor: pointer;
}
#fontSelector, #themeSelector {
    margin: 20px 0;
    text-align: center;
}
label {
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 10px;
}
#saveButton {
    display: none;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
#saveButton:hover {
    background-color: #45a049;
}
