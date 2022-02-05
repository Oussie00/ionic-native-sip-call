var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/* Call status */
export var CallState;
(function (CallState) {
    /* Call is being initialized */
    CallState["OutgoingInit"] = "OutgoingInit";
    /* Call is in progress (comes in between init and ringing) */
    CallState["OutgoingProgress"] = "OutgoingProgress";
    /* Call is ringing */
    CallState["OutgoingRinging"] = "OutgoingRinging";
    /* Call active (connected) */
    CallState["Connected"] = "Connected";
    CallState["Resuming"] = "Resuming";
    /* Call has ended (connected) */
    CallState["Ended"] = "Ended";
    CallState["Error"] = "Error";
})(CallState || (CallState = {}));
/* Registration status */
export var RegistrationState;
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
})(RegistrationState || (RegistrationState = {}));
var SipCallOriginal = /** @class */ (function (_super) {
    __extends(SipCallOriginal, _super);
    function SipCallOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SipCallOriginal.prototype.login = function (username, password, realm) { return cordova(this, "login", {}, arguments); };
    SipCallOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    SipCallOriginal.prototype.call = function (address, displayName) { return cordova(this, "call", {}, arguments); };
    SipCallOriginal.prototype.hangup = function () { return cordova(this, "hangup", {}, arguments); };
    SipCallOriginal.prototype.setMicrophoneMuted = function (muted) { return cordova(this, "setMicrophoneMuted", {}, arguments); };
    SipCallOriginal.prototype.setSpeakerEnabled = function (enabled) { return cordova(this, "setSpeakerEnabled", {}, arguments); };
    SipCallOriginal.prototype.requestPermissions = function () { return cordova(this, "requestPermissions", {}, arguments); };
    SipCallOriginal.prototype.onCallStateChanged = function () { return cordova(this, "onCallStateChanged", { "observable": true }, arguments); };
    SipCallOriginal.prototype.onRegistrationStateChanged = function () { return cordova(this, "onRegistrationStateChanged", { "observable": true }, arguments); };
    SipCallOriginal.pluginName = "SipCall";
    SipCallOriginal.plugin = "cordova-plugin-sip-call";
    SipCallOriginal.pluginRef = "plugins.SipCall";
    SipCallOriginal.repo = "";
    SipCallOriginal.install = "";
    SipCallOriginal.installVariables = [];
    SipCallOriginal.platforms = ["Android"];
    return SipCallOriginal;
}(AwesomeCordovaNativePlugin));
var SipCall = new SipCallOriginal();
export { SipCall };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2lwLWNhbGwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxpQkFBaUI7QUFDakIsTUFBTSxDQUFOLElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNuQiwrQkFBK0I7SUFDL0IsMENBQTZCLENBQUE7SUFDN0IsNkRBQTZEO0lBQzdELGtEQUFxQyxDQUFBO0lBQ3JDLHFCQUFxQjtJQUNyQixnREFBbUMsQ0FBQTtJQUNuQyw2QkFBNkI7SUFDN0Isb0NBQXVCLENBQUE7SUFDdkIsa0NBQXFCLENBQUE7SUFDckIsZ0NBQWdDO0lBQ2hDLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFiVyxTQUFTLEtBQVQsU0FBUyxRQWFwQjtBQUVELHlCQUF5QjtBQUN6QixNQUFNLENBQU4sSUFBWSxpQkFXWDtBQVhELFdBQVksaUJBQWlCO0lBQzNCLHFDQUFxQztJQUNyQyxrQ0FBYSxDQUFBO0lBQ2IsOEJBQThCO0lBQzlCLHdDQUFtQixDQUFBO0lBQ25CLHlCQUF5QjtJQUN6QixzQ0FBaUIsQ0FBQTtJQUNqQiw0QkFBNEI7SUFDNUIsOEJBQVMsQ0FBQTtJQUNULDhCQUE4QjtJQUM5QiwwQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBWFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVc1Qjs7SUErQjRCLDJCQUEwQjs7OztJQVVyRCx1QkFBSyxhQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBU3ZELHdCQUFNO0lBV04sc0JBQUksYUFBQyxPQUFlLEVBQUUsV0FBbUI7SUFTekMsd0JBQU07SUFVTCxvQ0FBa0IsYUFBQyxLQUFjO0lBVWpDLG1DQUFpQixhQUFDLE9BQWdCO0lBU25DLG9DQUFrQjtJQVdsQixvQ0FBa0I7SUFXbEIsNENBQTBCOzs7Ozs7OztrQkF6SjVCO0VBK0Q2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qIENhbGwgc3RhdHVzICovXG5leHBvcnQgZW51bSBDYWxsU3RhdGUge1xuICAvKiBDYWxsIGlzIGJlaW5nIGluaXRpYWxpemVkICovXG4gIE91dGdvaW5nSW5pdCA9ICdPdXRnb2luZ0luaXQnLFxuICAvKiBDYWxsIGlzIGluIHByb2dyZXNzIChjb21lcyBpbiBiZXR3ZWVuIGluaXQgYW5kIHJpbmdpbmcpICovXG4gIE91dGdvaW5nUHJvZ3Jlc3MgPSAnT3V0Z29pbmdQcm9ncmVzcycsXG4gIC8qIENhbGwgaXMgcmluZ2luZyAqL1xuICBPdXRnb2luZ1JpbmdpbmcgPSAnT3V0Z29pbmdSaW5naW5nJyxcbiAgLyogQ2FsbCBhY3RpdmUgKGNvbm5lY3RlZCkgKi9cbiAgQ29ubmVjdGVkID0gJ0Nvbm5lY3RlZCcsXG4gIFJlc3VtaW5nID0gJ1Jlc3VtaW5nJyxcbiAgLyogQ2FsbCBoYXMgZW5kZWQgKGNvbm5lY3RlZCkgKi9cbiAgRW5kZWQgPSAnRW5kZWQnLFxuICBFcnJvciA9ICdFcnJvcidcbn1cblxuLyogUmVnaXN0cmF0aW9uIHN0YXR1cyAqL1xuZXhwb3J0IGVudW0gUmVnaXN0cmF0aW9uU3RhdGUge1xuICAvKiBJbml0aWFsIHN0YXRlIGZvciByZWdpc3RyYXRpb25zICovXG4gIE5vbmUgPSAnTm9uZScsXG4gIC8qIFVucmVnaXN0cmF0aW9uIHN1Y2NlZWRlZCAqL1xuICBDbGVhcmVkID0gJ0NsZWFyZWQnLFxuICAvKiBSZWdpc3RyYXRpb24gZmFpbGVkICovXG4gIEZhaWxlZCA9ICdGYWlsZWQnLFxuICAvKiBSZWdpc3RyYXRpb24gc3VjY2VlZGVkICovXG4gIE9rID0gJ09rJyxcbiAgLyogUmVnaXN0cmF0aW9uIGluIHByb2dyZXNzICovXG4gIFByb2dyZXNzID0gJ1Byb2dyZXNzJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBTaXBDYWxsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbGV0cyB5b3UgbWFrZSBjYWxscyB1c2luZyBTSVAgIFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2lwQ2FsbCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zaXAtY2FsbCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lwQ2FsbDogU2lwQ2FsbCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc2lwQ2FsbC5sb2dpbigndXNlcm5hbWUnLCAnUEBzc3dvMHJkJywgJ3Rlc3QtcmVhbG0uY29tJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2lwQ2FsbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNpcC1jYWxsJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuU2lwQ2FsbCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lwQ2FsbCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogTG9naW4gd2l0aCB5b3VyIFZvSVAgcHJvdmlkZXJcbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKiBAcGFyYW0gcmVhbG0ge3N0cmluZ30gUmVhbG0gdG8gY29ubmVjdCB0b1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBsb2dnZWQgaW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcmVhbG06IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgZnJvbSB5b3VyIFZvSVAgcHJvdmlkZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbG9nZ2VkIG91dFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gKiBDYWxsIHdpdGggeW91ciBWb0lQIHByb3ZpZGVyXG4gKiBAcGFyYW0gYWRkcmVzcyB7c3RyaW5nfSBBZGRyZXNzXG4gKiBAcGFyYW0gZGlzcGxheU5hbWUge3N0cmluZ30gRGlzcGxheU5hbWVcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGxvZ2dlZCBpblxuICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FsbChhZGRyZXNzOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogSGFuZ3VwIHRoZSBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNhbGwgaXMgdGVybWluYXRlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYW5ndXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG4gIFxuICAvKipcbiAgICogTXV0ZSB0aGUgbWljcm9waG9uZVxuICAgKiBAcGFyYW0gbXV0ZWQge2Jvb2xlYW59IE11dGVkIFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBtaWMgaXMgbXV0ZWQvZW5hYmxlZFxuICAgKi9cbiAgIEBDb3Jkb3ZhKClcbiAgIHNldE1pY3JvcGhvbmVNdXRlZChtdXRlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHNwZWFrZXJcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59IFNwZWFrZXIgc3RhdGUgXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzcGVha2VyIGlzIGVuYWJsZWQvZGlzYWJsZWRcbiAgICovXG4gICBAQ29yZG92YSgpXG4gICBzZXRTcGVha2VyRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgIH1cblxuICAvKipcbiAgICogUmVxdWVzdFBlcm1pc3Npb25zIGZvciB0aGUgcGx1Z2luIChSRUNPUkRfQVVESU8pXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBQZXJtaXNzaW9ucyBoYXZlIGJlZW4gcmVxdWVzdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogT25DYWxsU3RhdGVDaGFuZ2VkOiBpcyBjYWxsZWQgd2hlbiB0aGUgY2FsbCBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPENhbGxTdGF0ZT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gdGhlIGNhbGwgc3RhdGUgaGFzIGNoYW5nZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uQ2FsbFN0YXRlQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPENhbGxTdGF0ZT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogT25SZWdpc3RyYXRpb25TdGF0ZUNoYW5nZWQ6IGlzIGNhbGxlZCB3aGVuIHRoZSByZWdpc3RyYXRpb24gc3RhdGUgaGFzIGNoYW5nZWRcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxSZWdpc3RyYXRpb25TdGF0ZT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gYSB0aGUgcmVnaXN0cmF0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvblJlZ2lzdHJhdGlvblN0YXRlQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPFJlZ2lzdHJhdGlvblN0YXRlPiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19