'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

/* Call status */
exports.CallState = void 0;
(function (CallState) {
    CallState["OutgoingInit"] = "OutgoingInit";
    CallState["OutgoingRinging"] = "OutgoingRinging";
    CallState["OutgoingProgress"] = "OutgoingProgress";
    CallState["Connected"] = "Connected";
    CallState["Resuming"] = "Resuming";
    CallState["Ended"] = "Ended";
    CallState["Error"] = "Error";
})(exports.CallState || (exports.CallState = {}));
/* Registration status */
exports.RegistrationState = void 0;
(function (RegistrationState) {
    /* Initial state for registrations */
    RegistrationState["None"] = "None";
    /* Unregistration succeeded */
    RegistrationState["Cleared"] = "Cleared";
    /* Registration failed */
    RegistrationState["Failed"] = "Failed";
    /* Registration succeeded */
    RegistrationState["Ok"] = "Ok";
    /* Registration in progress */
    RegistrationState["Progress"] = "Progress";
})(exports.RegistrationState || (exports.RegistrationState = {}));
var SipCall = /** @class */ (function (_super) {
    tslib.__extends(SipCall, _super);
    function SipCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SipCall.prototype.login = function (username, password, realm) { return core.cordova(this, "login", {}, arguments); };
    SipCall.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    SipCall.prototype.call = function (address, displayName) { return core.cordova(this, "call", {}, arguments); };
    SipCall.prototype.hangup = function () { return core.cordova(this, "hangup", {}, arguments); };
    SipCall.prototype.setMicrophoneMuted = function (muted) { return core.cordova(this, "setMicrophoneMuted", {}, arguments); };
    SipCall.prototype.setSpeakerEnabled = function (enabled) { return core.cordova(this, "setSpeakerEnabled", {}, arguments); };
    SipCall.prototype.requestPermissions = function () { return core.cordova(this, "requestPermissions", {}, arguments); };
    SipCall.prototype.onCallStateChanged = function () { return core.cordova(this, "onCallStateChanged", { "observable": true }, arguments); };
    SipCall.prototype.onRegistrationStateChanged = function () { return core.cordova(this, "onRegistrationStateChanged", { "observable": true }, arguments); };
    SipCall.pluginName = "SipCall";
    SipCall.plugin = "cordova-plugin-sip-call";
    SipCall.pluginRef = "plugins.SipCall";
    SipCall.repo = "";
    SipCall.install = "";
    SipCall.installVariables = [];
    SipCall.platforms = ["Android"];
    SipCall.decorators = [
        { type: core$1.Injectable }
    ];
    return SipCall;
}(core.AwesomeCordovaNativePlugin));

exports.SipCall = SipCall;
