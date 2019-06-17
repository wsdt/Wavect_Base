"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_base_1 = require("native-base");
var React = require("react");
var BottomTabNavigation_css_1 = require("./BottomTabNavigation.css");
var BottomTabs;
(function (BottomTabs) {
    BottomTabs["TAB_CHALLENGE"] = "challenge";
    BottomTabs["TAB_SETTINGS"] = "settings";
})(BottomTabs = exports.BottomTabs || (exports.BottomTabs = {}));
var BottomTabNavigation = (function (_super) {
    __extends(BottomTabNavigation, _super);
    function BottomTabNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTab: BottomTabs.TAB_CHALLENGE,
        };
        _this.openTab = function (tab) {
            _this.setState(function (prevState) { return (__assign({}, prevState, { activeTab: tab })); });
        };
        return _this;
    }
    BottomTabNavigation.prototype.render = function () {
        var _this = this;
        return <native_base_1.Footer>
            <native_base_1.FooterTab style={BottomTabNavigation_css_1.default.footerTab}>
                <native_base_1.Button badge vertical active={this.state.activeTab === BottomTabs.TAB_CHALLENGE} onPress={function () { return _this.openTab(BottomTabs.TAB_CHALLENGE); }}>
                    <native_base_1.Badge>
                        <native_base_1.Text>1</native_base_1.Text>
                    </native_base_1.Badge>
                    <native_base_1.Icon type="MaterialCommunityIcons" name="bell"/>
                    <native_base_1.Text>Challenge</native_base_1.Text>
                </native_base_1.Button>

                <native_base_1.Button vertical active={this.state.activeTab === BottomTabs.TAB_SETTINGS} onPress={function () { return _this.openTab(BottomTabs.TAB_SETTINGS); }}>
                    <native_base_1.Icon type="MaterialCommunityIcons" name="settings"/>
                    <native_base_1.Text>Einstellungen</native_base_1.Text>
                </native_base_1.Button>
            </native_base_1.FooterTab>
        </native_base_1.Footer>;
    };
    return BottomTabNavigation;
}(React.PureComponent));
exports.BottomTabNavigation = BottomTabNavigation;
//# sourceMappingURL=BottomTabNavigation.js.map