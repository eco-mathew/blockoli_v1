var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "한국어",
  title: "BLOCKOLI",
  blocks: "블록",
  /* Menu */
  open: "파일 열기",
  save: "파일 저장",
  deleteAll: "전체 삭제",
  settings: "설정",
  documentation: "도움말",
  reportBug: "버그 제보",
  examples: "예제",
  /* Settings */
  compilerLocation: "컴파일러 경로",
  compilerLocationDefault: "알수 없는 컴파일러 경로",
  sketchFolder: "스케치 폴더",
  sketchFolderDefault: "알수 없는 스케치 폴더",
  arduinoBoard: "아두이노 보드",
  arduinoBoardDefault: "알수없는 아두이노 보드",
  comPort: "COM 포트",
  comPortDefault: "알수 없는 COM 포트",
  defaultIdeButton: "기본 IDE 버튼",
  defaultIdeButtonDefault: "알수 없는 IDE 옵션",
  language: "언어",
  languageDefault: "알수 없는 언어",
  sketchName: "스케치 이름",
  /* Arduino console output */
  arduinoOpMainTitle: "아두이노 IDE output",
  arduinoOpWaiting: "IDE output 기다리는 중...",
  arduinoOpUploadedTitle: "스케치 업로드 성공",
  arduinoOpVerifiedTitle: "스케치 컴파일 성공",
  arduinoOpOpenedTitle: "IDE에서 열린 스케치",
  arduinoOpOpenedBody: "아두이노 IDE에서 스케치가 로드되어야 합니다.",
  arduinoOpErrorUpVerTitle: "빌드 또는 업로드 실패",
  arduinoOpErrorSketchTitle: "스케치 찾을 수 없음",
  arduinoOpErrorFlagTitle: "유효하지 않은 명령줄의 인수",
  arduinoOpErrorFlagPrefTitle: "'get-pref'플래그에 전달된 환경 설정이 없음",
  arduinoOpErrorIdeDirTitle: "아두이노 IDE를 찾을 수 없음",
  arduinoOpErrorIdeDirBody: "컴파일러 경로가 설정되지 않음.<br>" +
                            "'설정'에서 설정 필요'.",
  arduinoOpErrorIdeOptionTitle: "스케치를 이용해서 무엇을 할 수 있을까?",
  arduinoOpErrorIdeOptionBody: "설치 IDE 옵션이 설정되지 않음.<br>" +
                               "설정에서 IDE 옵션을 선택하세요.",
  arduinoOpErrorIdePortTitle: "사용 불가능한 시리얼 포트",
  arduinoOpErrorIdePortBody: "해당 시리얼 포트에 연결 불가.<br>" +
                             "아두이노가 PC에 정확히 연결되어 있는지, '설정'에서 포트는 제대로 연결되어 있는지 확인.",
  arduinoOpErrorIdeBoardTitle: "알수 없는 아두이노 보드",
  arduinoOpErrorIdeBoardBody: "아두이노 보드가 설정되지 않음.<br>" +
                              "'설정'에서 적절한 아두이노 보드를 선택하세요.",
  /* Modals */
  noServerTitle: "Ardublockly app not running",
  noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "새로운 블록 호출?",
  loadNewBlocksBody: "새 XML 파일을 생성하면 작업 공간의 현재 블록이 대체됩니다.<br>" +
                     "정말로 진행하겠습니까?",
  discardBlocksTitle: "블록 삭제?",
  discardBlocksBody: "작업 공간에 %1 블록(들)이 남아있음<br>" +
                     "정말로 블록 완전 삭제?",
  invalidXmlTitle: "유효하지 않은 XML",
  invalidXmlBody: "XML 파일이 블록으로 성공적으로 구문 분석되지 않았습니다. XML 코드를 검토하고 다시 시도.",
  /* Tooltips */
  uploadingSketch: "스케치 업로드 중...",
  uploadSketch: "아두이노로 스케치 업로드",
  verifyingSketch: "스케치 ...",
  verifySketch: "스케치 컴파일",
  openingSketch: "스케치 파일 여는 중...",
  openSketch: "IDE에서 스케치 열기",
  notImplemented: "실행하지 않은 implements",
  /* Prompts */
  ok: "확인",
  okay: "Okay",
  cancel: "취소",
  return: "돌아가기",
  /* Cards */
  arduinoSourceCode: "아두이노 소스 코드",
  blocksXml: "블록 XML",
  /* Toolbox Categories*/
  catBlocklyBasic: "기본 블록",
  catLogic: "논리",
  catLoops: "반복",
  catMath: "수학",
  catText: "문자열",
  catVariables: "변수",
  catFunctions: "함수",
  catInputOutput: "입출력",
  catTime: "시간",
  catAudio: "소리",
  catMotors: "서보모터",
  catComms: "통신",
  catSmartCity: "스마트시티 키트",
  catLED: "3색LED",
  catUltra_sonic: "초음파센서",
  catillu: "조도센서",
  catdht: "온습도센서",
  catlcd: "LCD 모듈",
  cat7segment: "7세그먼트 모듈",
  catAirPurifier:"공기청정기 키트",
  catFineDust: "미세먼지센서",
  catBroccoli: "브로콜리단계",
  catCrocodile: "악어룰렛",
  catSmartTrashcan: "스마트쓰레기통"
};
