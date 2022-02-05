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
    CallState["Ended"] = "End";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2lwLWNhbGwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxpQkFBaUI7QUFDakIsTUFBTSxDQUFOLElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNuQiwrQkFBK0I7SUFDL0IsMENBQTZCLENBQUE7SUFDN0IsNkRBQTZEO0lBQzdELGtEQUFxQyxDQUFBO0lBQ3JDLHFCQUFxQjtJQUNyQixnREFBbUMsQ0FBQTtJQUNuQyw2QkFBNkI7SUFDN0Isb0NBQXVCLENBQUE7SUFDdkIsa0NBQXFCLENBQUE7SUFDckIsZ0NBQWdDO0lBQ2hDLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFiVyxTQUFTLEtBQVQsU0FBUyxRQWFwQjtBQUVELHlCQUF5QjtBQUN6QixNQUFNLENBQU4sSUFBWSxpQkFXWDtBQVhELFdBQVksaUJBQWlCO0lBQzNCLHFDQUFxQztJQUNyQyxrQ0FBYSxDQUFBO0lBQ2IsOEJBQThCO0lBQzlCLHdDQUFtQixDQUFBO0lBQ25CLHlCQUF5QjtJQUN6QixzQ0FBaUIsQ0FBQTtJQUNqQiw0QkFBNEI7SUFDNUIsOEJBQVMsQ0FBQTtJQUNULDhCQUE4QjtJQUM5QiwwQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBWFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVc1Qjs7SUErQjRCLDJCQUEwQjs7OztJQVVyRCx1QkFBSyxhQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBU3ZELHdCQUFNO0lBV04sc0JBQUksYUFBQyxPQUFlLEVBQUUsV0FBbUI7SUFTekMsd0JBQU07SUFVTCxvQ0FBa0IsYUFBQyxLQUFjO0lBVWpDLG1DQUFpQixhQUFDLE9BQWdCO0lBU25DLG9DQUFrQjtJQVdsQixvQ0FBa0I7SUFXbEIsNENBQTBCOzs7Ozs7OztrQkF6SjVCO0VBK0Q2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qIENhbGwgc3RhdHVzICovXG5leHBvcnQgZW51bSBDYWxsU3RhdGUge1xuICAvKiBDYWxsIGlzIGJlaW5nIGluaXRpYWxpemVkICovXG4gIE91dGdvaW5nSW5pdCA9ICdPdXRnb2luZ0luaXQnLFxuICAvKiBDYWxsIGlzIGluIHByb2dyZXNzIChjb21lcyBpbiBiZXR3ZWVuIGluaXQgYW5kIHJpbmdpbmcpICovXG4gIE91dGdvaW5nUHJvZ3Jlc3MgPSAnT3V0Z29pbmdQcm9ncmVzcycsXG4gIC8qIENhbGwgaXMgcmluZ2luZyAqL1xuICBPdXRnb2luZ1JpbmdpbmcgPSAnT3V0Z29pbmdSaW5naW5nJyxcbiAgLyogQ2FsbCBhY3RpdmUgKGNvbm5lY3RlZCkgKi9cbiAgQ29ubmVjdGVkID0gJ0Nvbm5lY3RlZCcsXG4gIFJlc3VtaW5nID0gJ1Jlc3VtaW5nJyxcbiAgLyogQ2FsbCBoYXMgZW5kZWQgKGNvbm5lY3RlZCkgKi9cbiAgRW5kZWQgPSAnRW5kJyxcbiAgRXJyb3IgPSAnRXJyb3InXG59XG5cbi8qIFJlZ2lzdHJhdGlvbiBzdGF0dXMgKi9cbmV4cG9ydCBlbnVtIFJlZ2lzdHJhdGlvblN0YXRlIHtcbiAgLyogSW5pdGlhbCBzdGF0ZSBmb3IgcmVnaXN0cmF0aW9ucyAqL1xuICBOb25lID0gJ05vbmUnLFxuICAvKiBVbnJlZ2lzdHJhdGlvbiBzdWNjZWVkZWQgKi9cbiAgQ2xlYXJlZCA9ICdDbGVhcmVkJyxcbiAgLyogUmVnaXN0cmF0aW9uIGZhaWxlZCAqL1xuICBGYWlsZWQgPSAnRmFpbGVkJyxcbiAgLyogUmVnaXN0cmF0aW9uIHN1Y2NlZWRlZCAqL1xuICBPayA9ICdPaycsXG4gIC8qIFJlZ2lzdHJhdGlvbiBpbiBwcm9ncmVzcyAqL1xuICBQcm9ncmVzcyA9ICdQcm9ncmVzcycsXG59XG5cbi8qKlxuICogQG5hbWUgU2lwQ2FsbFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGxldHMgeW91IG1ha2UgY2FsbHMgdXNpbmcgU0lQICBcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNpcENhbGwgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2lwLWNhbGwnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpcENhbGw6IFNpcENhbGwpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnNpcENhbGwubG9naW4oJ3VzZXJuYW1lJywgJ1BAc3N3bzByZCcsICd0ZXN0LXJlYWxtLmNvbScpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NpcENhbGwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaXAtY2FsbCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLlNpcENhbGwnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpcENhbGwgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIExvZ2luIHdpdGggeW91ciBWb0lQIHByb3ZpZGVyXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICogQHBhcmFtIHJlYWxtIHtzdHJpbmd9IFJlYWxtIHRvIGNvbm5lY3QgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbG9nZ2VkIGluXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGZyb20geW91ciBWb0lQIHByb3ZpZGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGxvZ2dlZCBvdXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICogQ2FsbCB3aXRoIHlvdXIgVm9JUCBwcm92aWRlclxuICogQHBhcmFtIGFkZHJlc3Mge3N0cmluZ30gQWRkcmVzc1xuICogQHBhcmFtIGRpc3BsYXlOYW1lIHtzdHJpbmd9IERpc3BsYXlOYW1lXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBsb2dnZWQgaW5cbiAqL1xuICBAQ29yZG92YSgpXG4gIGNhbGwoYWRkcmVzczogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmd1cCB0aGUgY2FsbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjYWxsIGlzIHRlcm1pbmF0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFuZ3VwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICBcbiAgLyoqXG4gICAqIE11dGUgdGhlIG1pY3JvcGhvbmVcbiAgICogQHBhcmFtIG11dGVkIHtib29sZWFufSBNdXRlZCBcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbWljIGlzIG11dGVkL2VuYWJsZWRcbiAgICovXG4gICBAQ29yZG92YSgpXG4gICBzZXRNaWNyb3Bob25lTXV0ZWQobXV0ZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBzcGVha2VyXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufSBTcGVha2VyIHN0YXRlIFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3BlYWtlciBpcyBlbmFibGVkL2Rpc2FibGVkXG4gICAqL1xuICAgQENvcmRvdmEoKVxuICAgc2V0U3BlYWtlckVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RQZXJtaXNzaW9ucyBmb3IgdGhlIHBsdWdpbiAoUkVDT1JEX0FVRElPKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgUGVybWlzc2lvbnMgaGF2ZSBiZWVuIHJlcXVlc3RlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIE9uQ2FsbFN0YXRlQ2hhbmdlZDogaXMgY2FsbGVkIHdoZW4gdGhlIGNhbGwgc3RhdGUgaGFzIGNoYW5nZWRcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxDYWxsU3RhdGU+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBjYWxsIHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbkNhbGxTdGF0ZUNoYW5nZWQoKTogT2JzZXJ2YWJsZTxDYWxsU3RhdGU+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIE9uUmVnaXN0cmF0aW9uU3RhdGVDaGFuZ2VkOiBpcyBjYWxsZWQgd2hlbiB0aGUgcmVnaXN0cmF0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8UmVnaXN0cmF0aW9uU3RhdGU+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIGEgdGhlIHJlZ2lzdHJhdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25SZWdpc3RyYXRpb25TdGF0ZUNoYW5nZWQoKTogT2JzZXJ2YWJsZTxSZWdpc3RyYXRpb25TdGF0ZT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==