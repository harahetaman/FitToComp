{
    function myScript(thisObj){
    function myScript_UI(thisObj){
    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "FitToComp", undefined, {resizable:true, closeButton:false});
    myPanel.orientation = "column";
    myPanel.alignChildren = ["fill", "fill"];

    var Group = myPanel.add("group");
    Group.orientation = "column";
    Group.alignChildren = ["center", "center"];
    
    var logo = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00DC\x00\x00\x002\b\x06\x00\x00\x007\x14\u00B5s\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\f\u0090IDATx\u009C\u00ED\u009C\x7FL\u0093w\x1E\u00C7\u00DF\u00DF\x16P\u00AA\b\u00C8\u00D5\u00E1:w\u00F5\x07[&\x0E\u00CA\u0091\u00D9yC\u00EEF\u0087:\u0093\rcHd7\x1C\u00DC\u008Cq\u00F2\u00CFBa\t\u00FC\u00C3u\u00CB\u0092\u0099l\u00C5\u009Bw\u00D1p\x0B\u00C6\u00C5\u009A\u008B\x13\t\u00F5\x1C\u00C6[\u009A\u009B\u008B\u00D3\u00D4\u009CRP\f\u00C9\u00FC\u00F1\u00DC\u00CD\u00DE\u00CE\u00F4\u00C0Q\u00DA\u00F2\u00A3\u00F4\u00F9\u00DE\x1F\u00AC\u008Fmy\u009E\u00B6\u00D0\u0087\u0082\u00EE\u00FBJ\u00F8\u00A3\u00DF\u00E7\u00E9\u00E7\u00FB<\u00A5\u00EF\u00E7\u00F3\u00EB\u00FB-Y\u00BBv-\x05\u0083\u00C1H\n\u008A\u00F9\u00BE\x00\x06\u00E3\u00E7\x04\x13\x1C\u0083\u0091D\u0098\u00E0\x18\u008C$\u00C2\x04\u00C7`$\x11&8\x06#\u00890\u00C11\x18I\u0084\t\u008E\u00C1H\"Lp\fF\x12a\u0082c0\u0092\b\x13\x1C\u0083\u0091D\u0098\u00E0\x18\u008C$\u00C2\x04\u00C7`$\u0091\x149\u008C\u00D4\u00D7\u00D7c\u00D5\u00AAUr\u0098\u009A1\u00F7\u00EE\u00DDCkk\u00EB\u00BC\u00CC\r\x00\x06\u0083\x01\u00D9\u00D9\u00D9x\u00F0\u00E0\x01l6[\u00C2\u00F64\x1A\rZZZPPP\x00\u00B5Z\r\u0097\u00CB\u0085\u00F3\u00E7\u00CF\u00E3\u00B3\u00CF>\u0083\u00D3\u00E9\u0094\u00E1\u008A\x19\u00F3\u0089,\u0082[\u00BE|9\x00 ##\x03\x00022\"\u0087YI\u0096.]\nB\bFFF\u0090\u009D\u009D=\u00A7sI\u00A1\u00D1hp\u00F8\u00F0a\u00E4\u00E7\u00E7\x0Bc\u00FD\u00FD\u00FD\u00A8\u00AB\u00ABKH\x18F\u00A3\x11\x06\u0083Ax\u00ADV\u00ABQ]]\u008D\u008C\u008C\f444$t\u00CD\u008C\u00F9G\u0096\u00902(\u00B4S\u00A7N\u00E1\u00F4\u00E9\u00D3 \u0084\u00C8aV\u0092\u00CE\u00CEN\u009C:u\n<\u00CF\x0Bs'\u009B\u0096\u0096\u00960\u00B1\x01@~~>ZZZ\x12\u00B2\u00DB\u00D0\u00D0\x00\u009B\u00CD\u0086\u00A6\u00A6&\u00AC[\u00B7\x0EV\u00AB\x15\x00PQQ\u0091\u0090]\u00C6\u00C2@\x16\x0F\u00C7\u00F3<\x00\u00E0\u009Bo\u00BE\x01\x00l\u00D9\u00B2E\x0E\u00B3\u00A2\x10Bp\u00E1\u00C2\x05\u00F0<\u008F-[\u00B6\u0080\u00D2\u00F8\u00B6\u00F3\u00DD\u00BAu+\u00E1\u00B9\u009B\u009A\u009A\u00D0\u00D1\u00D1\x01\x00\u00D8\u00B4i\u0093\u00E89R\u00E3\u0095\u0095\u0095\u00A2\u00E3\u0097/_\u009E\u00E6\x11\u00F7\u00ED\u00DB\x07`\u00CA\u008B\x16\x16\x16\x02\u0098\u00F2\u009E\u00B10\x18\f\u00D8\u00BCy3\u00F2\u00F2\u00F2\u00B0t\u00E9R\u00E1\u0081\u00C0q\x1C\u00BC^/n\u00DD\u00BA\x05\u00A7\u00D39\u00AF!\u00F8\u00CF\x1DY\x04\x17D\u00A9TF=\u0096\u0096\u0096&\u009C\u00C3\u00F3<\u00C6\u00C7\u00C7\x11\b\x04f5\u00CF\\{\u00D1Xx\u00BD^\u00A8T*\u00D1q1\x0E\x1C8 :\x1E*\u00E2P\f\x06\x03\x0E\x1E<\b\u0095J\x05\u009F\u00CF\u0087C\u0087\x0EI^\u00CB\u009E={\u00F0\u00C6\x1Bo@\u00AB\u00D5\u008A\x1E\x0F\u008E\x07\x05X[[\u008B\u00CE\u00CEN\u0096\x17\u00CE\x03\u00B2\n\u00CE\u00EF\u00F7\u008B\u008E\u00A7\u00A5\u00A5\u00C1\u00E7\u00F3\u00A1\u00B7\u00D7\u0081\u00FF\u00DD\u00FF\x01<\u00CF#+G\u008D\u00E7\u009E[\u008F\u00CC\u00CCLLLL\u00C4=\x07\u00A5\x14~\u00BF_\u00F0\u00AA\u00F3\u00C5\u00F9\u00F3\u00E7Q]]-:\u009E(&\u0093I\u00B0\u00CDq\x1C>\u00FA\u00E8#\u00D1\u0082\u008CX\x1E\x19\x0F*\u0095\n\u00D5\u00D5\u00D5())\u0091\u00B4\u00CD\u0098\x1Bd\x15\\UU\u00D54\u00CF\u00A3P(\u00F0\u00FD\u00F7\u00DF\u00E3k\u00DB\u00DFq\u00EF_\x1C\u00DC\u00CA_\u0080\u00A7<\u0096\u008C_\u00C2\u00CD\u00EB}(+\u00DF\u008A\u00A7\u009EzjF\x02\u00AA\u00AA\u00AA\x02\u00A5\x14\u0084\u0090\u00B8CJ\u00B91\u0099L\x00\u0080\u00AD[\u00B7\u0086U\x13\u0083\u00E3\u0089\u00D8\r\x15\u00B2V\u00ABE[[\x1B\x00`\u00DD\u00BAu\u00C2\u00B8N\u00A7\u00C3'\u009F|\"\u00E9\u00D5\u00E2A\u00AB\u00D5\u00E2\u00E0\u00C1\u0083\u00A8\u00AF\u00AFg\u00A2K\x12\u00B2\n\u00AE\u00A4\u00A4\x04\x00\u00E0\u00F1x\u00841\u008F\u00C7\u00833g\u00CE\u00E0\u00CE\x7F\x06\u00A1\u00D4\u00ED\x05\u0096\u00AF\x01@\u00E0\x19\u00BA\u008D\x1B\u00BD\u00C7\u00E0=\u00F37\u00BC\u00BD\u00E7m\u00E4\u00E4\u00E4H\u00DA\r\x04\x02B\u00A8F)\u00C5K/\u00BD\x04B\b<\x1E\u00CF\u00BC\t\x0E\u0098\x12G\u00A2\x02\u009B\r\x1A\u008D&a\u00B1\x05Q\u00A9Thnn\u00C6\u00C0\u00C0\x00\x0B/\u0093\x00\u0091\u00E3G\u0084\u0082I\u00F8\u00F8\u00F88\x00`\u00D1\u00A2E\u00C2\u00B1o\u00BF\u00FD\x16\u00DD\u00DD\u00DDH)\u00FB\x03\u00F85[A\u00C9T\x0EG@An\u009FG\u00E0\x1F&l\u00C8\u00CF\u00C7\u00B2e\u00CB$\u00C5\u00B3b\u00C5\nl\u00DC\u00B8Qx\x1D9\u008F\u00D1h\u008Cy\u008D\u00D1\u008A&MMM1\u00DF\x0F\u0084\x178*++%\u00F3\u00B2\u00A0'\u00B2Z\u00AD3\n\u00F7,\x16K\\\x026\u009B\u00CD1\u00AB\u0096\x1C\u00C7\u00A1\u00B7\u00B7\x17###\u00C8\u00CB\u00CB\u00C3\u00F3\u00CF?/\u009As\u00C6\u009A[\u00A7\u00D3a\u00C7\u008E\x1D(**\u00C2\u00EA\u00D5\u00AB\x05\x1B.\u0097\x0Bw\u00EE\u00DC\u00C1\u00D5\u00ABWq\u00F2\u00E4\u00C9\u00A8b\u008D\u00F5Y\u00E9t:\u00EC\u00DE\u00BD\x1B\u0085\u0085\u0085\u00C2C\u00C4\u00E5r\u00A1\u00AF\u00AF\x0FG\u008E\x1C\u0081\u00C3\u00E1\b\u00B3U^^.\u00F4)\u0083\u00F7z\u00F1\u00E2E\u00D1\u009C4\u009E\u00B9\u00F7\u00EF\u00DF\x1Ff\u00AF\u00BF\u00BF\x1F===s\u0092\u00E3\u00CA\u00EA\u00E1\u00BA\u00BA\u00BA@)EUU\u00950v\u00FD\u00FAu\u00A4\u00AA\u00F3\x10\u00D0\u0096\u0081NN\x00\u0098\x12\x15%\x04X\u00B3\r\u00A9W\u00FE\u008C\u009E\u009E\x1E\u00B8\x02\x01D\u00CA\u008D\x10\u0082\x1C\x00\u00D9\u00D9\u00D9x\u00E1\u0085\x17\u00A0P(\u0084yx\u009E\u00C7\u00AE]\u00BB\u0084\u00B1D\x10+Z,Tt:]T\u00B1\u00B9\\.\u0098\u00CD\u00E6i\u00F7\x14l\u00A8\u0087\u00F6\u00F8\x00\u00C0\u00E7\u00F3\u00A1\u00B3\u00B3\x13]]]\u00D3\u00CE7\x1A\u008D\u0092s\u00A9\u00D5j\u00A8\u00D5j\u00E8\u00F5z\u00A1\b3\x1Boo4\x1AQ[[;\u00EDa\u00A0V\u00ABa0\x18\u00B0i\u00D3&\u00D4\u00D7\u00D7c``@2_\u00D5j\u00B5\u00D0j\u00B5\u00D8\u00B9s'\u00DEz\u00EB\u00AD0\u0081F#2|\x0F\u0092\u009F\u009F\u008F\u00FC\u00FC|\u00EC\u00DC\u00B9\x13\u009F~\u00FA)\u00DA\u00DB\u00DBg|_R\u00C8*\u00B8\u009E\u009E\x1E\x00\b\x13\u009C\u00D7\u00E3\x01\u0096>\t\n\x02 $OS(\u00A1\u00E0\u00BE\x06\r\u008C!K\u00A5BKZ\x1A\"\u00EB\u0095\u00A3\u0094\u00E2\u00C8\u00F88\u00C6\u00C6\u00C6\u00C2\u00C6\x1D\x0E\u0087 89\u00AA\u0095R%\u00FBH\x16\u00820w\u00EC\u00D8!y\u00CC\u00E7\u00F3\u00A1\u00B2\u00B2R\u00F4\u00A9\u00ECt:\u00B1o\u00DF>\u009C8q\x02z\u00BD\x1E\u00FD\u00FD\u00FD\u00B8p\u00E1\u0082h\u008B@\u00A3\u00D1\u00E0\u00F3\u00CF?\u008F;d\r\x16aV\u00AE\\)\u00B44\u00E2\u00A5\u00AE\u00AE.\u00A6\u00ED\x0F?\u00FC\x10^\u00AF7\u00E6\u00F5\u00A8T*\u00EC\u00DF\u00BF?\u00EEk\x10\x13[\u00A4\u00BD\u00E6\u00E6f\f\x0F\x0F\u00CB\u00F6\u00BF\u0097Upb\u00DE&++\x0B\u00EEA\x0Edr\x1C4e1\u00C0ON\x1D\x18u\u0083\\\u00FD\x0B\u00C8\u008Fc@:P\u0099\u009A\u00864\x11\u00ED\u00B4\u008D\u008F\u0083F\u00D8\u0095\u00C3\u00AB\u0085\"\x15rD\u00B2\x10\x04WTT$y\u00EC\u00D8\u00B1c1C\u00A0\u008F?\u00FE\x18\x00\u00A2z\u0081\u0099\u0088-\x14\u0083\u00C1\x00\u00B3\u00D9,\u00FB\u008A\u0098\u00A07\u008D\x07\u00A9>h\"444\u00C8\u00F6\u00BF\u0097\u00F5\u009B\u00BBr\u00E5J\u00E4\u00E6\u00E6\n\u00B9\x18!\x04\u00BF*.\u00C6\u00C4\u0090\x13\u008AkGA&G\u0081\u00C5\u00D9\u00C0\u00A2eP\u00F4\x1E\x03\u00F5\u00DC\u0082\u00FBe\x0F\u00C6S\u0080C\x13\x13\b`\u00CA\u00AB\u00F9~\u00FA\x1B\u0093\u00C8\u00E9rss\u0091\u009B\u009B+\u00E7\u00A5?2\u00AC^\u00BDZ\u00F2\u00D8\u00C9\u0093'c\u00BE\u00DF\u00E1pD\x15\u009B\u00D1hL\u00A8\x18SQQ\x01\u009DN7\u00A3\u00F7\u00D8\u00EDvX,\x16\u00F8|\u00BE\u00A8\u00E7\u00B9\\.X\u00AD\u00D6\u00A8\x15\u00D5hy\u00AA\x18\x1C\u00C7\u00C1b\u00B1\u00C0n\u00B7K\u009E\u00A3V\u00AB\u00E3\u00AA\x13\u00C4\u0083\u00AC\x1E\u00EE\u00F5\u00D7_\x07\x00!\u00CC\u00A3\u0094b\u00FD\u00FA\u00F5(,\u00D2\u00E1\u00DA5\x0BR\u00DC\u00F7\u00A0T\u00AF\x07\u00C1$\u0094\x03g\u00E1\u00DD\u00E8\u00C7\u00F0\u00A6\x1FA\u00FC\n\u009C\u00FE'\u00F0\u009B\u0094\x14\x14(\u0088\x10Z\u008A\u00C9\u008DR\u008A\u00D7^{M\u0098g>\u00AB\u0094\u00B1\b\u00CD\x7F\u00A4\u008A6R\u008Do)\u00A2}\u00A1\u00E4H\u00F0\u00B7o\u00DF.:\u00EE\u00F3\u00F9\u0084|F\u00A3\u00D1`\u00EF\u00DE\u00BD\u0092!\u00D9\u00EE\u00DD\u00BB\u00E3\u00CE\u00A3\x0E\x1F>,\u0084\u00B5]]]\u0092\u009F\u0085\u00CDf\x0B\x0B\x15\u00A5\u00F2\u00AF\u0099\x10\u00F9\u00D9\u0087.6\u0088\u00A4\u00B8\u00B88\u00A1\u00B9\u0082\u00C8\u00EA\u00E1\n\n\nPPP\x106\u0096\u009E\u009E\u008EW_\u00DD\u008Er\u00C3o\u00F1\u00A4\u00B7\x07\u00AA\u0081\u00E3P\\;\n\u00BF\u00DA\x0Bw\u0091\x1B4\u00C0\u00C3]<\f\u00F7\u008A\x00\u00FE8:\u0086\u00D0lM*;+,,Daa\u00E1\u00BC\u00AF6\u0099\x0F\u00A2y\x01\u008DF\u0093\u0090m\u008DF#\u00E9\u00DDB\u008B\x07N\u00A7\x13&\u0093IX\u00E7\x19Ip9Z<\u0084\u00E6\u0090\u00D1D\u00FA\u00D5W_\u0085\u00BD\u00BEq\u00E3F\u00DCsH\x11)n\u009B\u00CD\u0086\u00CE\u00CEN\u00D1s\u009Fx\u00E2\u0089\u0084\u00E7\x03d\x16\u009C\u00DDn\u00C7\u0095+W\u00C2\u00C6x\u009EGNN\x0E\u00CA\u00B7nC\u00E5\u00EF~?u\u00E1)\n\u00B8K<\u0098H\u00F3\x03\u0094 \u00A0\u009A\u0084\u00B7d\x18\x0E:\u0089\u00BF\u00FA\u00FDXD\bT\u0084`\u00B1b\u00BA\u00A0\b!\u00B0\u00DB\u00ED\u00B0\u00DB\u00ED\x0B\u00DA\u00BB\u00CD\x15w\u00EF\u00DE\u0095<\u00B6k\u00D7\u00AE\u0098\u00EF\u00D7\u00E9t\u0092!_\u00B4\u00FCG\u00ACRw\u00F9\u00F2e\u00D1s\u00E5\u00E8\x0F\u00CE\x17RB\u0096\u00EB\u009Ed\r)\u00BB\u00BB\u00BB\x01\x00\u00CF>\u00FBl\u00D8\u00F8\u00E4\u00E4$\u0094J%\u00D2\u00D3\u00D3\u00E1\x1E\u00F2\u00C0W8\x06\u00DF*\x1F\b\u00FF\u0093\u00A0\x02\u0080\u00E7\u0097\x1E,\u00DE\u00B0\x18\u0096>%~\u00E4y(\x00\u008C\u0081\u0082\x07\u00C0\x07\x02a\u00E2\u00EA\u00EE\u00EE\x06\u00A5\x14\u00CF<\u00F3\u008C,\x05\u0094\u00D0\x15\x1C\x0B\u009D\u009E\u009E\x1E\u00C9\u00DE^mmm\u00CC\u009E\u00D8{\u00EF\u00BD\x17\u00B3J\u00F9s&33sN\u00ED\u00CB\u00EA\u00E1\x06\x07\x07188(z,\x10\b\u00C0j\u00B5\u00E2\x07\u00D5\x7F1\u00F4\u00EB!\x04Ry\u00F0\u008B\x1E\u00FE\u00D1\x14\x1E\x0F6?\u00C0P\u00EE\x04\u00DA&&p\u00C8\u00E7\u00C3\u009F\x06\u0087\u00E0\u00F6x\u00B0d\u00C9\u0092\u00B0\u00F0qhhHr\u009E\u00C7\u009D\u00C8~Y(*\u0095\n\x1D\x1D\x1D\u00A2m\x0E\u008DF\u0083\u00B6\u00B66\u00E8\u00F5z\x00S\u00BD\u00A6\u00BA\u00BA:\u00F4\u00F5\u00F5\u00C1l6C\u00A7\u00D3Iz,`j\u0081t$R\x1E\u0091\u00E3\u00B8\u00E87\u00B1\u0080)++\x13\x1D\u0097\u00EB\u009E\u0092\u00B2xY\u00A1P\u00E0\u00CA\u0095+\u00F8\u00EE\u00BB\u00EF\u00A0\\\u00A3@\u00FA\u00BF\u00D3A\u00E8\u00F4p\u0091*\x00e\x1A\u0090E\bV>\u00FD\u00B4\u0090\x0FfeeM\x1D\u00FFi\u00FD\u00A4\u00DF\u00EF\x7Fl\u00C2\u00C9\u00F2\u00F2rttt@\u00A3\u00D1\u00C4U\u00F4p8\x1C\u00B0Z\u00ADQ\x1B\u00D2\x07\x0E\x1C\u00C0;\u00EF\u00BC\x13\u00D7J\x13\u0095J\u0085\u008A\u008A\n\u008C\u008C\u008C\u00C0d2\u0081\u00E38\u00D1\u00F0\u00E9\u00DDw\u00DF\x05\u0080\u00B0\u00A2\u0089\u00D45\u00F4\u00F6\u00F6\u00C6\u00BC\u008F\u0085\u00C0\u0089\x13'p\u00F4\u00E8Q\u00D8l6a\u00C5I\u00F0\u0081\x14\u00C9\u00FD\u00FB\u00F7e\u0099SV\u00C1m\u00DE\u00BCY\u00B4\u00901<<\u008C\u00B3g\u00CF\u00C2\u00E3\u00F1\u0080\f\x10\u00A4\u00DC\u0095\u009Evtl\x14\u0098\u009C*\u00B6\u00E8\u00F5zdffbrrRh~SJQZZ*,v~\u00D4\u0085g0\x18\u0084\nf\u00BC\u00A1mkkk\u00D82(1\u0082\u00AB/\u00E2\u0081\u00E38a\u0095Hww\u00B7h3:\u00D8\x04nnn\u008Ei\u00EF\u00F8\u00F1\u00E3q\u00CD;\u00DF\u00E8\u00F5zI\u0081Er\u00F5\u00EAUY\u00E6\u0094Up\u00DB\u00B6m\x13\x1DW(\x14(++\u009B\u00CA\u00B7(\x1E\u00E6n\"P\x05\x05\u00C8T\b:::\u008A\u0094\u0094\u0094i\u00A2\nnp\u0095\u00BB\x01>\u0097Hy\u008EP*++\u00E3j\x118\u009DN466\u00CA\u00B2\u0080\u00D9\u00E7\u00F3\u00A1\u00B1\u00B1Qx\u00DD\u00DA\u00DA\u008A\u00ED\u00DB\u00B7\u00CF\u00DA\u00AE\u00C5b\u0089\u00BB%\u00F0\u00A8\u00E0r\u00B9d\u00CBue\x15\\p\u00C5\u00BF\u00DB\u00ED\x06\u00F0\u00F0\u00B7G233\u00B1v\u00ED\u00DA\x19\u00DB\u00F3\u00F9|\u0082\u00D8x\u009E\x17v\f\u00E4\u00E4\u00E4\u0080\x10\x02\u00B7\u00DB\u00FD\u00C8x\u00B8\u008B\x17/\u00C6\u00FC\x12o\u00D8\u00B0!\u00EE\u009E\u009C\u00C3\u00E1@MM\u00CD\u00AC\u00F6\u00C3\x05\u00E18\x0E\u008D\u008D\u008D\u00D3\x04RSS3\u00AB\u00D5&6\u009Bm^vO\u00CC5f\u00B3Y6[\u00B2\n\u00EE\u00EC\u00D9\u00B3 \u0084\u00A0\u00B4\u00B4\x14\u0094Rtww\u00CFhsi4RSSQZZ\nB\b\u00BE\u00FC\u00F2KPJ%C\u00D8\u0085\u0088\u00C9dB^^^\u00D4\x10&\u00B8\u00BD)^\u009CN'***b\u00EE\u00F8\u008E$\u00B8`YJ\x1CN\u00A7\x13555Q\x17/\u00CF\u00C4\u00DEB\u00C5b\u00B1Dm\u009E\x07\u009B\u00FDr.\u00E9\u0093Up\u00E7\u00CE\u009D\x03\u00F00\u0097\u00B3Z\u00ADa{\u00E3f\x0B\u00A5\x14\x19\x19\x19\u0082\u00E0\u00CE\u009D;\x07\u009E\u00E7QRR\u00F2H\u0085\u0095o\u00BE\u00F9&\u008CF#\u008A\u008B\u008B\u00C3\u008A\x18\x1C\u00C7\u00E1\u00F6\u00ED\u00DB\u00F8\u00E2\u008B/fe\u00B7\u00BD\u00BD\x1D\u00ED\u00ED\u00EDq\u00FD\u00A6\u00C9\u00CD\u009B7\u00E3Z\u00FD\u00EEt:\u00D1\u00D0\u00D0\u0080\u00E3\u00C7\u008F'\u00BC=g\u00A1b2\u0099\u00D0\u00D5\u00D5\u0095\u00D4\u00ED9\u00B2\u00EE\u0087\x0B\u00FEb\u00D5\x07\x1F|\x00B\b.]\u00BA$Y\u00B9\u009C)\u00A9\u00A9\u00A9x\u00F1\u00C5\x17\u00A1P(\u00D0\u00D2\u00D2\x02\u009E\u00E7\u00F1\u00FE\u00FB\u00EFC\u00A9T\u00A2\u00BE\u00BE^\u00969\x18\u008F\x1F\u00F1\u00EC[L&\u00B2z\u00B8\u00D0\u00F0\u008ER\u008AW^yE\u00B6\u0090\u008F\u00E7y\u008C\u008E\u008E\n\u00F3<*\u00A1$\u0083\x11\u008A,\x1E\u008E\u00C1X\u00A8,4\x0F\u00F7\u00E8$@\f\u00C6c\x00\x13\x1C\u0083\u0091D\u0098\u00E0\x18\u008C$\u00C2r8\x06#\u00890\x0F\u00C7`$\x11&8\x06#\u00890\u00C11\x18I\u0084\t\u008E\u00C1H\"Lp\fF\x12a\u0082c0\u0092\u00C8\u00FF\x014\u00A2Xd\u00E2\u00CC\u00EA\u00D6\x00\x00\x00\x00IEND\u00AEB`\u0082"
    var image = Group.add("image", undefined, logo);

    var squareButton = Group.add("button", undefined, "Create Comps");
    squareButton.minimumSize.width = 200;
    squareButton.onClick = function(){
        var compWidth = 1080;
        var compHeight = 1080;
        var compDuration = 2;
        
        var selectedFiles = app.project.selection;
        
        app.beginUndoGroup("Process Selected Images or Videos");
        
        for (var i = 0; i < selectedFiles.length; i++) {
            var file = selectedFiles[i];
            var comp = app.project.items.addComp(file.name, compWidth, compHeight, 1, compDuration, 29.97);
            var layer = comp.layers.add(file);
        }
        app.beginUndoGroup("Fit to Comp Width and Height");
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem) {
                var comp = item;
                var layers = comp.layers;
                for (var j = 1; j <= layers.length; j++) {
                    var layer = layers[j];
                    if (layer.selected){
                        var wasActive = layer.active;
                        if (wasActive) {
                            layer.selected = false;
                        }
                        if (layer.source.width > layer.source.height) {
                            var scale = (comp.height/layer.source.height)*100;
                            layer.transform.scale.setValue([scale, scale]);
                        } else {
                            var scale = (comp.width/layer.source.width)*100;
                            layer.transform.scale.setValue([scale, scale]);
                        }
                        if (wasActive) {
                            layer.selected = true;
                        }
                    }
                }
            }
        }
        app.endUndoGroup();
    }
    var ftcButton = Group.add("button", undefined, "Fit To Comp");
    ftcButton.minimumSize.width = 200;
    ftcButton.onClick = function(){
        app.beginUndoGroup("Fit to Comp Width and Height");
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem) {
                var comp = item;
                var layers = comp.layers;
                for (var j = 1; j <= layers.length; j++) {
                    var layer = layers[j];
                    if (layer.selected){
                        var wasActive = layer.active;
                        if (wasActive) {
                            layer.selected = false;
                        }
                        if (layer.source.width > layer.source.height) {
                            var scale = (comp.height/layer.source.height)*100;
                            layer.transform.scale.setValue([scale, scale]);
                        } else {
                            var scale = (comp.width/layer.source.width)*100;
                            layer.transform.scale.setValue([scale, scale]);
                        }
                        if (wasActive) {
                            layer.selected = true;
                        }
                    }
                }
            }
        }
        app.endUndoGroup();
    }
    var ftcwButton = Group.add("button", undefined, "FTC Width");
    ftcwButton.minimumSize.width = 200;
    ftcwButton.onClick = function(){
        app.beginUndoGroup("Fit to Comp Width");
            for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem) {
            var comp = item;
            var layers = comp.layers;
            for (var j = 1; j <= layers.length; j++) {
            var layer = layers[j];
            if (layer.selected){
            var wasActive = layer.active;
            if (wasActive) {
            layer.selected = false;
            }
            var scale = (comp.height/layer.source.width)*100;
            layer.transform.scale.setValue([scale, scale]);
            if (wasActive) {
            layer.selected = true;
                        }
                    }
                }
            }
        }
        app.endUndoGroup();
    }
    var ftchButton = Group.add("button", undefined, "FTC Height");
    ftchButton.minimumSize.width = 200;
    ftchButton.onClick = function(){
        app.beginUndoGroup("Fit to Comp Height");
            for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem) {
            var comp = item;
            var layers = comp.layers;
            for (var j = 1; j <= layers.length; j++) {
            var layer = layers[j];
            if (layer.selected){
            var wasActive = layer.active;
            if (wasActive) {
            layer.selected = false;
            }
            var scale = (comp.height/layer.source.height)*100;
            layer.transform.scale.setValue([scale, scale]);
            if (wasActive) {
            layer.selected = true;
                        }
                    }
                }
            }
        }
        app.endUndoGroup();
    }
    myPanel.layout.layout(true);
    myPanel.onResizing = myPanel.onResize = function(){
        this.layout.resize();
    }

    return myPanel;
}
var myScriptPalette = myScript_UI(thisObj);
if((myScriptPalette != null) && (myScriptPalette instanceof Window)){
    myScriptPalette.show();
}
}
myScript(this);
}
// FitToComp_Beta - 2023.02.05 Ryo Shimabukuro 