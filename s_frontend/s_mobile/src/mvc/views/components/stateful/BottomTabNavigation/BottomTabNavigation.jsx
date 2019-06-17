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
var React = require("react");
var Tabs;
(function (Tabs) {
    Tabs["CHALLENGE"] = "challenge";
    Tabs["SETTINGS"] = "settings";
})(Tabs = exports.Tabs || (exports.Tabs = {}));
var BottomTabNavigation = /** @class */ (function (_super) {
    __extends(BottomTabNavigation, _super);
    function BottomTabNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTab: Tabs.CHALLENGE,
        };
        _this.onBtnPress = function (tab) {
            // TODO: open new screen
            _this.setState(function (prevState) { return (__assign({}, prevState, { activeTab: tab })); });
        };
        return _this;
    }
    BottomTabNavigation.prototype.render = function () {
        return <></>;
        /*(
            <Footer>
                <FooterTab style={styles.footerTab}>
                    <Button badge vertical active={this.state.activeTab === Tabs.CHALLENGE}
                            onPress={() => this.onBtnPress(Tabs.CHALLENGE)}>
                        <Badge>
                            <Text>1</Text>
                        </Badge>
                        <Icon type="MaterialCommunityIcons" name="bell"/>
                        <Text>Challenge</Text>
                    </Button>

                    <Button vertical active={this.state.activeTab === Tabs.SETTINGS}
                            onPress={() => this.onBtnPress(Tabs.SETTINGS)}>
                        <Icon type="MaterialCommunityIcons" name="settings"/>
                        <Text>Einstellungen</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )*/
    };
    return BottomTabNavigation;
}(React.PureComponent));
exports.BottomTabNavigation = BottomTabNavigation;
