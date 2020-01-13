angular.module('kityminderEditor').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ui/directive/appendNode/appendNode.html',
    "<div class=\"km-btn-group append-group\"><div class=\"km-btn-item append-child-node\" ng-disabled=\"minder.queryCommandState('AppendChildNode') === -1\" ng-click=\"minder.queryCommandState('AppendChildNode') === -1 || execCommand('AppendChildNode')\" title=\"{{ 'appendchildnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendchildnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-parent-node\" ng-disabled=\"minder.queryCommandState('AppendParentNode') === -1\" ng-click=\"minder.queryCommandState('AppendParentNode') === -1 || execCommand('AppendParentNode')\" title=\"{{ 'appendparentnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendparentnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-sibling-node\" ng-disabled=\"minder.queryCommandState('AppendSiblingNode') === -1\" ng-click=\"minder.queryCommandState('AppendSiblingNode') === -1 ||execCommand('AppendSiblingNode')\" title=\"{{ 'appendsiblingnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendsiblingnode' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/arrange/arrange.html',
    "<div class=\"km-btn-group arrange-group\"><div class=\"km-btn-item arrange-up\" ng-disabled=\"minder.queryCommandState('ArrangeUp') === -1\" ng-click=\"minder.queryCommandState('ArrangeUp') === -1 || minder.execCommand('ArrangeUp')\" title=\"{{ 'arrangeup' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangeup' | lang:'ui/command' }}</span></div><div class=\"km-btn-item arrange-down\" ng-disabled=\"minder.queryCommandState('ArrangeDown') === -1\" ng-click=\"minder.queryCommandState('ArrangeDown') === -1 || minder.execCommand('ArrangeDown');\" title=\"{{ 'arrangedown' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangedown' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/colorPanel/colorPanel.html',
    "<div class=\"bg-color-wrap\"><span class=\"quick-bg-color\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\" ng-disabled=\"minder.queryCommandState('background') === -1\"></span> <span color-picker class=\"bg-color\" set-color=\"setDefaultBg()\" ng-disabled=\"minder.queryCommandState('background') === -1\"><span class=\"caret\"></span></span> <span class=\"bg-color-preview\" ng-style=\"{ 'background-color': bgColor }\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\" ng-disabled=\"minder.queryCommandState('background') === -1\"></span></div>"
  );


  $templateCache.put('ui/directive/expandLevel/expandLevel.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default expand\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"minder.execCommand('ExpandToLevel', 9999)\"></button> <button type=\"button\" class=\"btn btn-default expand-caption dropdown-toggle\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'expandtoleaf' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'expandtoleaf' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"level in levels\"><a href ng-click=\"minder.execCommand('ExpandToLevel', level)\">{{ 'expandtolevel' + level | lang:'ui/command' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/fontOperator/fontOperator.html',
    "<div class=\"font-operator\"><div class=\"dropdown font-family-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontfamily') === -1\"><a href class=\"current-font-family\" title=\"{{ 'fontfamily' | lang: 'ui' }}\">{{ getFontfamilyName(minder.queryCommandValue('fontfamily')) || '字体' }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontFamilyList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontfamily', f.val)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontfamily') }\" ng-style=\"{'font-family': f.val }\">{{ f.name }}</a></li></ul></div><div class=\"dropdown font-size-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontsize') === -1\"><a href class=\"current-font-size\" title=\"{{ 'fontsize' | lang: 'ui' }}\">{{ minder.queryCommandValue('fontsize') || '字号' }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontSizeList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontsize', f)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontsize') }\" ng-style=\"{'font-size': f + 'px'}\">{{ f }}</a></li></ul></div><span class=\"s-btn-icon font-bold\" ng-click=\"minder.queryCommandState('bold') === -1 || minder.execCommand('bold')\" ng-class=\"{'font-bold-selected' : minder.queryCommandState('bold') == 1}\" ng-disabled=\"minder.queryCommandState('bold') === -1\"></span> <span class=\"s-btn-icon font-italics\" ng-click=\"minder.queryCommandState('italic') === -1 || minder.execCommand('italic')\" ng-class=\"{'font-italics-selected' : minder.queryCommandState('italic') == 1}\" ng-disabled=\"minder.queryCommandState('italic') === -1\"></span><div class=\"font-color-wrap\"><span class=\"quick-font-color\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\">A</span> <span color-picker class=\"font-color\" set-color=\"setDefaultColor()\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\"><span class=\"caret\"></span></span> <span class=\"font-color-preview\" ng-style=\"{ 'background-color': foreColor }\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\"></span></div><color-panel minder=\"minder\" class=\"inline-directive\"></color-panel></div>"
  );


  $templateCache.put('ui/directive/hyperLink/hyperLink.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default hyperlink\" title=\"{{ 'link' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addHyperlink()\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\"></button> <button type=\"button\" class=\"btn btn-default hyperlink-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\" title=\"{{ 'link' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'link' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'link' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addHyperlink()\">{{ 'insertlink' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('HyperLink', null)\">{{ 'removelink' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/imageBtn/imageBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default image-btn\" title=\"{{ 'image' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addImage()\" ng-disabled=\"minder.queryCommandState('Image') === -1\"></button> <button type=\"button\" class=\"btn btn-default image-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('Image') === -1\" title=\"{{ 'image' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'image' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'image' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addImage()\">{{ 'insertimage' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('Image', '')\">{{ 'removeimage' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/kityminderEditor/kityminderEditor.html',
    "<div class=\"minder-editor-container\"><div class=\"top-tab\" top-tab=\"minder\" id=\"top-tab\" editor=\"editor\" ng-if=\"minder\"></div><div search-box minder=\"minder\" ng-if=\"minder\"></div><div class=\"minder-editor\" id=\"minder-editor\"></div><div class=\"km-note\" note-editor minder=\"minder\" ng-if=\"minder\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div></div>"
  );


  $templateCache.put('ui/directive/kityminderViewer/kityminderViewer.html',
    "<div class=\"minder-editor-container\"><div class=\"minder-viewer\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div></div>"
  );


  $templateCache.put('ui/directive/layout/layout.html',
    "<div class=\"readjust-layout\"><a ng-click=\"minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')\" class=\"btn-wrap\" ng-disabled=\"minder.queryCommandState('resetlayout') === -1\"><span class=\"btn-icon reset-layout-icon\"></span> <span class=\"btn-label\">{{ 'resetlayout' | lang: 'ui/command' }}</span></a></div>"
  );


  $templateCache.put('ui/directive/navigator/navigator.html',
    "<div class=\"nav-bar\"><div class=\"nav-btn zoom-in\" ng-click=\"minder.execCommand('zoomIn')\" title=\"{{ 'zoom-in' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 0 }\"><div class=\"icon\"></div></div><div class=\"zoom-pan\"><div class=\"origin\" ng-style=\"{'transform': 'translate(0, ' + getHeight(100) + 'px)'}\" ng-click=\"minder.execCommand('zoom', 100);\"></div><div class=\"indicator\" ng-style=\"{\n" +
    "             'transform': 'translate(0, ' + getHeight(zoom) + 'px)',\n" +
    "             'transition': 'transform 200ms'\n" +
    "             }\"></div></div><div class=\"nav-btn zoom-out\" ng-click=\"minder.execCommand('zoomOut')\" title=\"{{ 'zoom-out' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 1 }\"><div class=\"icon\"></div></div><div class=\"nav-btn hand\" ng-click=\"minder.execCommand('hand')\" title=\"{{ 'hand' | lang : 'ui' }}\" ng-class=\"{ 'active' : minder.queryCommandState('hand') == 1 }\"><div class=\"icon\"></div></div><div class=\"nav-btn camera\" ng-click=\"minder.execCommand('camera', minder.getRoot(), 600);\" title=\"{{ 'camera' | lang : 'ui' }}\"><div class=\"icon\"></div></div><div class=\"nav-btn nav-trigger\" ng-class=\"{'active' : isNavOpen}\" ng-click=\"toggleNavOpen()\" title=\"{{ 'navigator' | lang : 'ui' }}\"><div class=\"icon\"></div></div><div class=\"nav-btn hidden\" ng-click=\"showTopMenu()\" id=\"showMenuBtn\"><svg t=\"1578220189179\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1914\" width=\"25\" height=\"25\"><path d=\"M383.068024 469.026256l-171.915441 0c-47.39238 0-85.957721-38.533618-85.957721-85.957721l0-171.915441c0-47.39238 38.566364-85.957721 85.957721-85.957721l171.915441 0c47.40773 0 85.957721 38.566364 85.957721 85.957721l0 171.915441C469.025745 430.492638 430.475753 469.026256 383.068024 469.026256L383.068024 469.026256zM426.046884 211.153094c0-23.695678-19.283182-42.97886-42.97886-42.97886l-171.915441 0c-23.680329 0-42.97886 19.283182-42.97886 42.97886l0 171.915441c0 23.712051 19.298532 42.97886 42.97886 42.97886l171.915441 0c23.695678 0 42.97886-19.266809 42.97886-42.97886L426.046884 211.153094 426.046884 211.153094zM383.068024 898.798487l-171.915441 0c-47.39238 0-85.957721-38.518269-85.957721-85.941348l0-171.915441c0-47.39238 38.566364-85.957721 85.957721-85.957721l171.915441 0c47.40773 0 85.957721 38.566364 85.957721 85.957721l0 171.915441C469.025745 860.281241 430.475753 898.798487 383.068024 898.798487L383.068024 898.798487zM426.046884 640.941698c0-23.695678-19.283182-42.97886-42.97886-42.97886l-171.915441 0c-23.680329 0-42.97886 19.283182-42.97886 42.97886l0 171.915441c0 23.712051 19.298532 42.97886 42.97886 42.97886l171.915441 0c23.695678 0 42.97886-19.266809 42.97886-42.97886L426.046884 640.941698 426.046884 640.941698zM877.35664 748.516762c-11.879562 0-21.521153-9.577123-21.521153-21.457708l0-86.117356c0-23.695678-19.283182-42.97886-42.97886-42.97886l-171.915441 0c-23.680329 0-42.97886 19.283182-42.97886 42.97886l0 171.915441c0 23.712051 19.298532 42.97886 42.97886 42.97886l86.117356 0c11.864212 0 21.48943 9.657964 21.48943 21.521153 0 11.83249-9.625218 21.441335-21.48943 21.441335L640.941186 898.798487c-47.39238 0-85.957721-38.518269-85.957721-85.941348l0-171.915441c0-47.39238 38.566364-85.957721 85.957721-85.957721l171.915441 0c47.40773 0 85.957721 38.566364 85.957721 85.957721l0 86.117356C898.814348 738.939639 889.188106 748.516762 877.35664 748.516762L877.35664 748.516762zM812.856627 469.026256l-171.915441 0c-47.39238 0-85.957721-38.533618-85.957721-85.957721l0-171.915441c0-47.39238 38.566364-85.957721 85.957721-85.957721l171.915441 0c47.40773 0 85.957721 38.566364 85.957721 85.957721l0 171.915441C898.814348 430.492638 860.264357 469.026256 812.856627 469.026256L812.856627 469.026256zM855.835488 211.153094c0-23.695678-19.283182-42.97886-42.97886-42.97886l-171.915441 0c-23.680329 0-42.97886 19.283182-42.97886 42.97886l0 171.915441c0 23.712051 19.298532 42.97886 42.97886 42.97886l171.915441 0c23.695678 0 42.97886-19.266809 42.97886-42.97886L855.835488 211.153094 855.835488 211.153094z\" p-id=\"1915\" fill=\"#FFFFFF\"></path></svg></div></div><div class=\"nav-previewer\" ng-show=\"isNavOpen\"></div>"
  );


  $templateCache.put('ui/directive/noteBtn/noteBtn.html',
    "<div class=\"btn-group-vertical note-btn-group\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default note-btn\" title=\"{{ 'note' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addNote()\" ng-disabled=\"minder.queryCommandState('note') === -1\"></button> <button type=\"button\" class=\"btn btn-default note-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('note') === -1\" title=\"{{ 'note' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'note' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'note' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addNote()\">{{ 'insertnote' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('note', null)\">{{ 'removenote' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/noteEditor/noteEditor.html',
    "<div class=\"panel panel-default\" ng-init=\"noteEditorOpen = false\" ng-show=\"noteEditorOpen\"><div class=\"panel-heading\"><h3 class=\"panel-title\">备注</h3><span>（<a class=\"help\" href=\"https://www.zybuluo.com/techird/note/46064\" target=\"_blank\">支持 GFM 语法书写</a>）</span> <i class=\"close-note-editor glyphicon glyphicon-remove\" ng-click=\"closeNoteEditor()\"></i></div><div class=\"panel-body\"><div ng-show=\"noteEnabled\" ui-codemirror=\"{ onLoad: codemirrorLoaded }\" ng-model=\"noteContent\" ui-codemirror-opts=\"{\n" +
    "                gfm: true,\n" +
    "                breaks: true,\n" +
    "                lineWrapping : true,\n" +
    "                mode: 'gfm',\n" +
    "                dragDrop: false,\n" +
    "                lineNumbers:true\n" +
    "             }\"></div><p ng-show=\"!noteEnabled\" class=\"km-note-tips\">请选择节点编辑备注</p></div></div>"
  );


  $templateCache.put('ui/directive/notePreviewer/notePreviewer.html',
    "<div id=\"previewer-content\" ng-show=\"showNotePreviewer\" ng-style=\"previewerStyle\" ng-bind-html=\"noteContent\"></div>"
  );


  $templateCache.put('ui/directive/operation/operation.html',
    "<div class=\"km-btn-group operation-group\"><div class=\"km-btn-item edit-node\" ng-disabled=\"minder.queryCommandState('text') === -1\" ng-click=\"minder.queryCommandState('text') === -1 || editNode()\" title=\"{{ 'editnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'editnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item remove-node\" ng-disabled=\"minder.queryCommandState('RemoveNode') === -1\" ng-click=\"minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');\" title=\"{{ 'removenode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'removenode' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/other/other.html',
    "<div class=\"other-btn\" dropdown is-open=\"isopen\" style=\"padding-top:16px\"><button type=\"button\" class=\"btn btn-sm btn-primary clboy-btn\" ng-click=\"minder.execCommand('ExpandToLevel', 9999)\">{{ 'expandAll' | lang:'ui/other' }}</button> <button type=\"button\" class=\"btn btn-sm btn-secondary clboy-btn\" ng-click=\"closeAll()\">{{ 'closeAll' | lang:'ui/other' }}</button><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-sm btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ 'out' | lang:'ui/other' }}<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"javascript:;\" ng-click=\"download('json','json')\">{{ 'downloadJSON' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"download('png','png')\">{{ 'downloadPng' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"download('text','txt')\">{{ 'downloadText' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"download('markdown','md')\">{{ 'downloadMarkdown' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"download('svg','svg')\">{{ 'downloadSvg' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"download('svg','html')\">{{ 'downloadHtml' | lang:'ui/other' }}</a></li></ul></div><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-sm btn-warning dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ 'in' | lang:'ui/other' }}<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"javascript:;\" ng-click=\"loadData('local')\">{{ 'localData' | lang:'ui/other' }}</a></li><li><a href=\"javascript:;\" ng-click=\"loadData('remote')\">{{ 'remoteData' | lang:'ui/other' }}</a></li></ul></div><button type=\"button\" class=\"btn btn-sm btn-danger clboy-btn\" ng-click=\"createNewConfirm()\">{{ 'createNew' | lang:'ui/other' }}</button> <button type=\"button\" class=\"btn btn-sm btn-dark clboy-btn\" ng-click=\"closeTop()\">{{ 'closeTop' | lang:'ui/other' }}</button> <button type=\"button\" class=\"btn btn-sm btn-dark clboy-btn\" ng-disabled=\"minder.isReadonly\" ng-click=\"minder.readOnly()\">{{ 'readOnly' | lang:'ui/other' }}</button> <button type=\"button\" class=\"btn btn-sm btn-primary clboy-btn\" ng-disabled=\"!minder.isReadonly\" ng-click=\"minder.editable()\">{{ 'editable' | lang:'ui/other' }}</button><div class=\"btn-group\" ng-show=\"minder.isRemote\"><button class=\"btn btn-sm dropdown-toggle\" data-toggle=\"dropdown\">{{currentFontSize||'字号'}}<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li ng-repeat=\"f in fontSizeList\"><a href=\"#\" ng-style=\"{'font-size': f + 'px'}\" ng-click=\"changeFontSize(f)\">{{f}}</a></li></ul></div><button type=\"button\" class=\"btn btn-sm btn- clboy-btn\" id=\"fullScreen-btn\" ng-click=\"viewModel()\">{{isFullScreen?( 'exitView' | lang:'ui/other'):( 'view' | lang:'ui/other') }}</button> <input type=\"file\" id=\"localFile\" style=\"display: none\"></div><div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" id=\"createNewModal\"><div class=\"modal-dialog modal-sm\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h5 class=\"modal-title\">新建提示</h5></div><div class=\"modal-body\" style=\"font-size:16px\">你是要丢弃当前数据吗？</div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">否</button> <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" ng-click=\"createNew()\">是</button></div></div></div></div>"
  );


  $templateCache.put('ui/directive/priorityEditor/priorityEditor.html',
    "<ul class=\"km-priority tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-priority-item tool-group-item\" ng-repeat=\"p in priorities\" ng-click=\"commandDisabled || minder.execCommand('priority', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getPriorityTitle(p) }}\"><div class=\"km-priority-icon tool-group-icon priority-{{p}}\"></div></li></ul>"
  );


  $templateCache.put('ui/directive/progressEditor/progressEditor.html',
    "<ul class=\"km-progress tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-progress-item tool-group-item\" ng-repeat=\"p in progresses\" ng-click=\"commandDisabled || minder.execCommand('progress', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getProgressTitle(p) }}\"><div class=\"km-progress-icon tool-group-icon progress-{{p}}\"></div></li></ul>"
  );


  $templateCache.put('ui/directive/resourceEditor/resourceEditor.html',
    "<div class=\"resource-editor\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" ng-model=\"newResourceName\" ng-required ng-keypress=\"$event.keyCode == 13 && addResource(newResourceName)\" ng-disabled=\"!enabled\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-click=\"addResource(newResourceName)\" ng-disabled=\"!enabled\">添加</button></span></div><div class=\"resource-dropdown clearfix\" id=\"resource-dropdown\"><ul class=\"km-resource\" ng-init=\"resourceListOpen = false\" ng-class=\"{'open': resourceListOpen}\"><li ng-repeat=\"resource in used\" ng-disabled=\"!enabled\" ng-blur=\"blurCB()\"><label style=\"background: {{resourceColor(resource.name)}}\"><input type=\"checkbox\" ng-model=\"resource.selected\" ng-disabled=\"!enabled\"> <span>{{resource.name}}</span></label></li></ul><div class=\"resource-caret\" click-anywhere-but-here=\"resourceListOpen = false\" is-active=\"resourceListOpen\" ng-click=\"resourceListOpen = !resourceListOpen\"><span class=\"caret\"></span></div></div></div>"
  );


  $templateCache.put('ui/directive/searchBox/searchBox.html',
    "<div id=\"search\" class=\"search-box clearfix\" ng-show=\"showSearch\"><div class=\"input-group input-group-sm search-input-wrap\"><input type=\"text\" id=\"search-input\" class=\"form-control search-input\" ng-model=\"keyword\" ng-keydown=\"handleKeyDown($event)\" aria-describedby=\"basic-addon2\"> <span class=\"input-group-addon search-addon\" id=\"basic-addon2\" ng-show=\"showTip\" ng-bind=\"'第 ' + curIndex + ' 条，共 ' + resultNum + ' 条'\"></span></div><div class=\"btn-group btn-group-sm prev-and-next-btn\" role=\"group\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'prev')\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'next')\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button></div><div class=\"close-search\" ng-click=\"exitSearch()\"><span class=\"glyphicon glyphicon-remove\"></span></div></div>"
  );


  $templateCache.put('ui/directive/searchBtn/searchBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default search\" title=\"{{ 'search' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"enterSearch()\"></button> <button type=\"button\" class=\"btn btn-default search-caption dropdown-toggle\" ng-click=\"enterSearch()\" title=\"{{ 'search' | lang:'ui' }}\"><span class=\"caption\">{{ 'search' | lang:'ui' }}</span> <span class=\"sr-only\">{{ 'search' | lang:'ui' }}</span></button></div>"
  );


  $templateCache.put('ui/directive/selectAll/selectAll.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default select\" title=\"{{ 'selectall' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"select['all']()\"></button> <button type=\"button\" class=\"btn btn-default select-caption dropdown-toggle\" title=\"{{ 'selectall' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'selectall' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'selectall' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"item in items\"><a href ng-click=\"select[item]()\">{{ 'select' + item | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/styleOperator/styleOperator.html',
    "<div class=\"style-operator\"><a ng-click=\"minder.queryCommandState('clearstyle') === -1 || minder.execCommand('clearstyle')\" class=\"btn-wrap clear-style\" ng-disabled=\"minder.queryCommandState('clearstyle') === -1\"><span class=\"btn-icon clear-style-icon\"></span> <span class=\"btn-label\">{{ 'clearstyle' | lang: 'ui' }}</span></a><div class=\"s-btn-group-vertical\"><a class=\"s-btn-wrap\" href ng-click=\"minder.queryCommandState('copystyle') === -1 || minder.execCommand('copystyle')\" ng-disabled=\"minder.queryCommandState('copystyle') === -1\"><span class=\"s-btn-icon copy-style-icon\"></span> <span class=\"s-btn-label\">{{ 'copystyle' | lang: 'ui' }}</span></a> <a class=\"s-btn-wrap paste-style-wrap\" href ng-click=\"minder.queryCommandState('pastestyle') === -1 || minder.execCommand('pastestyle')\" ng-disabled=\"minder.queryCommandState('pastestyle') === -1\"><span class=\"s-btn-icon paste-style-icon\"></span> <span class=\"s-btn-label\">{{ 'pastestyle' | lang: 'ui' }}</span></a></div></div>"
  );


  $templateCache.put('ui/directive/templateList/templateList.html',
    "<div class=\"dropdown temp-panel\" dropdown on-toggle=\"toggled(open)\"><div class=\"dropdown-toggle current-temp-item\" ng-disabled=\"minder.queryCommandState('template') === -1\" dropdown-toggle><a href class=\"temp-item {{ minder.queryCommandValue('template') }}\" title=\"{{ minder.queryCommandValue('template') | lang: 'template' }}\"></a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu temp-list\"><li ng-repeat=\"(key, templateObj) in templateList\" class=\"temp-item-wrap\"><a ng-click=\"minder.execCommand('template', key);\" class=\"temp-item {{key}}\" ng-class=\"{ 'temp-item-selected' : key == minder.queryCommandValue('template') }\" title=\"{{ key | lang: 'template' }}\"></a></li></ul></div>"
  );


  $templateCache.put('ui/directive/themeList/themeList.html',
    "<div class=\"dropdown theme-panel\" dropdown><div class=\"dropdown-toggle theme-item-selected\" dropdown-toggle ng-disabled=\"minder.queryCommandState('theme') === -1\"><a href class=\"theme-item\" ng-style=\"getThemeThumbStyle(minder.queryCommandValue('theme'))\" title=\"{{ minder.queryCommandValue('theme') | lang: 'theme'; }}\">{{ minder.queryCommandValue('theme') | lang: 'theme'; }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu theme-list\"><li ng-repeat=\"key in themeKeyList\" class=\"theme-item-wrap\"><a ng-click=\"minder.execCommand('theme', key);\" class=\"theme-item\" ng-style=\"getThemeThumbStyle(key)\" title=\"{{ key | lang: 'theme'; }}\">{{ key | lang: 'theme'; }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/topTab/topTab.html',
    "<tabset><tab ng-hide=\"minder.isReadonly\" heading=\"{{ 'idea' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('idea')\" select=\"setCurTab('idea')\"><undo-redo editor=\"editor\"></undo-redo><append-node minder=\"minder\"></append-node><arrange minder=\"minder\"></arrange><operation minder=\"minder\"></operation><hyper-link minder=\"minder\"></hyper-link><image-btn minder=\"minder\"></image-btn><note-btn minder=\"minder\"></note-btn><priority-editor minder=\"minder\"></priority-editor><progress-editor minder=\"minder\"></progress-editor><resource-editor minder=\"minder\"></resource-editor></tab><tab ng-hide=\"minder.isReadonly\" heading=\"{{ 'appearence' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('appearance')\" select=\"setCurTab('appearance')\"><template-list minder=\"minder\" class=\"inline-directive\"></template-list><theme-list minder=\"minder\"></theme-list><layout minder=\"minder\" class=\"inline-directive\"></layout><style-operator minder=\"minder\" class=\"inline-directive\"></style-operator><font-operator minder=\"minder\" class=\"inline-directive\"></font-operator></tab><tab heading=\"{{ 'view' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('view')\" select=\"setCurTab('view')\"><expand-level minder=\"minder\"></expand-level><select-all minder=\"minder\"></select-all><search-btn minder=\"minder\"></search-btn></tab><tab heading=\"{{ 'title' | lang: 'ui/other'; }}\" id=\"more-op\" ng-click=\"toggleTopTab('other')\" select=\"setCurTab('other')\"><div minder=\"minder\" class=\"other\"></div></tab><a href=\"https://github.com/cloudlandboy/kityminder-editor\" target=\"_blank\" id=\"repository\"><svg t=\"1578484112519\" class=\"icon\" viewbox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3931\" width=\"30\" height=\"30\"><path d=\"M512.032 831.904c-19.168 0-38.304-9.92-58.144-29.76-7.808-7.808-7.808-20.48 0-28.288s20.48-7.808 28.288 0C494.368 786.08 504.16 792 512.032 792s17.664-5.92 29.856-18.144c7.808-7.808 20.48-7.808 28.288 0s7.808 20.48 0 28.288c-19.84 19.84-38.976 29.76-58.144 29.76z m-512-306.4c0 49.888 4.256 95.136 12.8 135.68s20.544 75.744 36 105.536 35.008 55.904 58.656 78.336 49.344 40.928 77.056 55.456c27.744 14.528 59.456 26.304 95.2 35.264S351.84 951.04 388.8 954.624 466.496 960 510.944 960c44.448 0 85.248-1.792 122.4-5.376s73.6-9.856 109.344-18.848c35.744-8.96 67.552-20.736 95.456-35.264s53.792-33.024 77.6-55.456c23.808-22.432 43.456-48.544 58.944-78.336s27.552-64.96 36.256-105.536c8.704-40.576 13.056-85.792 13.056-135.68 0-89.376-27.744-166.368-83.2-230.976 3.2-8.608 5.952-18.496 8.256-29.6s4.544-26.816 6.656-47.104c2.144-20.288 1.344-43.712-2.4-70.272S942.56 93.888 932.256 66.24l-8-1.632c-5.344-1.088-14.048-0.704-26.144 1.088s-26.208 5.024-42.4 9.696-37.056 13.92-62.656 27.744-52.608 31.328-81.056 52.512c-48.352-14.72-115.008-30.112-200-30.112s-151.808 15.392-200.544 30.112c-28.448-21.184-55.552-38.592-81.344-52.224s-46.4-22.976-61.856-28c-15.456-5.024-29.792-8.256-42.944-9.696s-21.6-1.888-25.344-1.344c-3.744 0.544-6.496 1.152-8.256 1.888-10.304 27.648-17.408 54.752-21.344 81.312s-4.8 49.888-2.656 69.984c2.144 20.096 4.448 35.904 6.944 47.392S80 286.304 83.2 294.56C27.744 358.816 0 435.808 0 525.536z m136.544 113.888c0-58.016 21.344-110.624 64-157.856 12.8-14.4 27.648-25.312 44.544-32.704s36.096-11.616 57.6-12.608 42.048-0.8 61.6 0.608 43.744 3.296 72.544 5.696 53.696 3.616 74.656 3.616c20.96 0 45.856-1.184 74.656-3.616s52.992-4.288 72.544-5.696c19.552-1.408 40.096-1.6 61.6-0.608s40.8 5.216 57.856 12.608c17.056 7.392 32 18.304 44.8 32.704 42.656 47.232 64 99.84 64 157.856 0 34.016-3.552 64.32-10.656 90.944s-16.096 48.928-26.944 66.912c-10.848 18.016-26.048 33.216-45.6 45.632s-38.496 22.016-56.8 28.8c-18.304 6.784-41.952 12.096-70.944 15.904s-54.944 6.112-77.856 6.912c-22.944 0.8-51.808 1.216-86.656 1.216s-63.648-0.416-86.4-1.216c-22.752-0.8-48.608-3.104-77.6-6.912s-52.608-9.12-70.944-15.904c-18.304-6.816-37.248-16.416-56.8-28.8s-34.752-27.616-45.6-45.632c-10.848-18.016-19.84-40.32-26.944-66.912s-10.656-56.928-10.656-90.944zM256.032 608c0-53.024 28.64-96 64-96s64 42.976 64 96-28.64 96-64 96-64-42.976-64-96z m384 0c0-53.024 28.64-96 64-96s64 42.976 64 96-28.64 96-64 96-64-42.976-64-96z\" p-id=\"3932\" fill=\"#5cb85c\"></path></svg></a></tabset>"
  );


  $templateCache.put('ui/directive/undoRedo/undoRedo.html',
    "<div class=\"km-btn-group do-group\"><div class=\"km-btn-item undo\" ng-disabled=\"editor.history.hasUndo() == false\" ng-click=\"editor.history.hasUndo() == false || editor.history.undo();\" title=\"{{ 'undo' | lang:'ui' }}\"><i class=\"km-btn-icon\"></i></div><div class=\"km-btn-item redo\" ng-disabled=\"editor.history.hasRedo() == false\" ng-click=\"editor.history.hasRedo() == false || editor.history.redo()\" title=\"{{ 'redo' | lang:'ui' }}\"><i class=\"km-btn-icon\"></i></div></div>"
  );


  $templateCache.put('ui/dialog/hyperlink/hyperlink.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">链接</h3></div><div class=\"modal-body\"><form><div class=\"form-group\" id=\"link-url-wrap\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"link-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"url\" ng-blur=\"urlPassed = R_URL.test(url)\" ng-focus=\"this.value = url\" ng-keydown=\"shortCut($event)\" id=\"link-url\" placeholder=\"必填：以 http(s):// 或 ftp:// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"link-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"title\" ng-blur=\"titlePassed = true\" id=\"link-title\" placeholder=\"选填：鼠标在链接上悬停时提示的文本\"></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );


  $templateCache.put('ui/dialog/imExportNode/imExportNode.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><textarea type=\"text\" class=\"form-control single-input\" rows=\"8\" ng-keydown=\"shortCut($event);\" ng-model=\"value\" ng-readonly=\"type === 'export'\">\n" +
    "    </textarea></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\" ng-disabled=\"type === 'import' && value == ''\">OK</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button></div>"
  );


  $templateCache.put('ui/dialog/image/image.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">图片</h3></div><div class=\"modal-body\"><tabset><tab heading=\"图片搜索\"><form class=\"form-inline\"><div class=\"form-group\"><label for=\"search-keyword\">关键词：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.searchKeyword2\" id=\"search-keyword\" placeholder=\"请输入搜索的关键词\"></div><div class=\"btn-group\"><button class=\"btn btn-primary\" ng-click=\"searchImage('bing')\">Bing</button> <button class=\"btn btn-primary\" ng-click=\"searchImage('adoutu')\">斗图</button></div></form><div class=\"alert alert-success\" role=\"alert\" style=\"margin-top: 15px\">图片上右键 <span class=\"label label-info\">复制图片链接</span> 然后外链插入</div><small>经测试这里搜索出来的图片大多支持跨域！</small></tab><tab heading=\"外链图片\" active=\"true\"><form><div class=\"form-group\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"image-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.url\" ng-blur=\"urlPassed = data.R_URL.test(data.url)\" ng-focus=\"this.value = data.url\" ng-keydown=\"shortCut($event)\" id=\"image-url\" placeholder=\"必填：以 http(s):// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"image-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.title\" ng-blur=\"titlePassed = true\" id=\"image-title\" placeholder=\"选填：鼠标在图片上悬停时提示的文本\"></div><div class=\"form-group\"><label for=\"image-preview\">图片预览：</label><img class=\"image-preview\" id=\"image-preview\" ng-src=\"{{ data.url }}\" alt=\"{{ data.title }}\"></div></form></tab><tab heading=\"上传图片\"><div class=\"alert alert-success\" role=\"alert\">可以把图片上传到图床，然后使用外链图片</div><p>推荐使用 <a href=\"https://postimages.org/\" target=\"_blank\"><img src=\"https://postimgs.org/img/logo.png\" width=\"129\" height=\"22\" alt=\"postimages\"></a></p></tab></tabset></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );

}]);
