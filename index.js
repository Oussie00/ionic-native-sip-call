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
    CallState["OutgoingInit"] = "OutgoingInit";
    CallState["OutgoingRinging"] = "OutgoingRinging";
    CallState["OutgoingProgress"] = "OutgoingProgress";
    CallState["Connected"] = "Connected";
    CallState["Resuming"] = "Resuming";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2lwLWNhbGwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxpQkFBaUI7QUFDakIsTUFBTSxDQUFOLElBQVksU0FRWDtBQVJELFdBQVksU0FBUztJQUNuQiwwQ0FBNkIsQ0FBQTtJQUM3QixnREFBbUMsQ0FBQTtJQUNuQyxrREFBcUMsQ0FBQTtJQUNyQyxvQ0FBdUIsQ0FBQTtJQUN2QixrQ0FBcUIsQ0FBQTtJQUNyQiw0QkFBZSxDQUFBO0lBQ2YsNEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBUlcsU0FBUyxLQUFULFNBQVMsUUFRcEI7QUFFRCx5QkFBeUI7QUFDekIsTUFBTSxDQUFOLElBQVksaUJBV1g7QUFYRCxXQUFZLGlCQUFpQjtJQUMzQixxQ0FBcUM7SUFDckMsa0NBQWEsQ0FBQTtJQUNiLDhCQUE4QjtJQUM5Qix3Q0FBbUIsQ0FBQTtJQUNuQix5QkFBeUI7SUFDekIsc0NBQWlCLENBQUE7SUFDakIsNEJBQTRCO0lBQzVCLDhCQUFTLENBQUE7SUFDVCw4QkFBOEI7SUFDOUIsMENBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQVhXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFXNUI7O0lBK0I0QiwyQkFBMEI7Ozs7SUFVckQsdUJBQUssYUFBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsS0FBYTtJQVN2RCx3QkFBTTtJQVdOLHNCQUFJLGFBQUMsT0FBZSxFQUFFLFdBQW1CO0lBU3pDLHdCQUFNO0lBVUwsb0NBQWtCLGFBQUMsS0FBYztJQVVqQyxtQ0FBaUIsYUFBQyxPQUFnQjtJQVNuQyxvQ0FBa0I7SUFXbEIsb0NBQWtCO0lBV2xCLDRDQUEwQjs7Ozs7Ozs7a0JBcEo1QjtFQTBENkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKiBDYWxsIHN0YXR1cyAqL1xuZXhwb3J0IGVudW0gQ2FsbFN0YXRlIHtcbiAgT3V0Z29pbmdJbml0ID0gJ091dGdvaW5nSW5pdCcsXG4gIE91dGdvaW5nUmluZ2luZyA9ICdPdXRnb2luZ1JpbmdpbmcnLFxuICBPdXRnb2luZ1Byb2dyZXNzID0gJ091dGdvaW5nUHJvZ3Jlc3MnLFxuICBDb25uZWN0ZWQgPSAnQ29ubmVjdGVkJyxcbiAgUmVzdW1pbmcgPSAnUmVzdW1pbmcnLFxuICBFbmRlZCA9ICdFbmRlZCcsXG4gIEVycm9yID0gJ0Vycm9yJ1xufVxuXG4vKiBSZWdpc3RyYXRpb24gc3RhdHVzICovXG5leHBvcnQgZW51bSBSZWdpc3RyYXRpb25TdGF0ZSB7XG4gIC8qIEluaXRpYWwgc3RhdGUgZm9yIHJlZ2lzdHJhdGlvbnMgKi9cbiAgTm9uZSA9ICdOb25lJyxcbiAgLyogVW5yZWdpc3RyYXRpb24gc3VjY2VlZGVkICovXG4gIENsZWFyZWQgPSAnQ2xlYXJlZCcsXG4gIC8qIFJlZ2lzdHJhdGlvbiBmYWlsZWQgKi9cbiAgRmFpbGVkID0gJ0ZhaWxlZCcsXG4gIC8qIFJlZ2lzdHJhdGlvbiBzdWNjZWVkZWQgKi9cbiAgT2sgPSAnT2snLFxuICAvKiBSZWdpc3RyYXRpb24gaW4gcHJvZ3Jlc3MgKi9cbiAgUHJvZ3Jlc3MgPSAnUHJvZ3Jlc3MnLFxufVxuXG4vKipcbiAqIEBuYW1lIFNpcENhbGxcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBsZXRzIHlvdSBtYWtlIGNhbGxzIHVzaW5nIFNJUCAgXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTaXBDYWxsIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NpcC1jYWxsJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaXBDYWxsOiBTaXBDYWxsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zaXBDYWxsLmxvZ2luKCd1c2VybmFtZScsICdQQHNzd28wcmQnLCAndGVzdC1yZWFsbS5jb20nKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTaXBDYWxsJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2lwLWNhbGwnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5TaXBDYWxsJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXBDYWxsIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBMb2dpbiB3aXRoIHlvdXIgVm9JUCBwcm92aWRlclxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqIEBwYXJhbSByZWFsbSB7c3RyaW5nfSBSZWFsbSB0byBjb25uZWN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGxvZ2dlZCBpblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCByZWFsbTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBmcm9tIHlvdXIgVm9JUCBwcm92aWRlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBsb2dnZWQgb3V0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAqIENhbGwgd2l0aCB5b3VyIFZvSVAgcHJvdmlkZXJcbiAqIEBwYXJhbSBhZGRyZXNzIHtzdHJpbmd9IEFkZHJlc3NcbiAqIEBwYXJhbSBkaXNwbGF5TmFtZSB7c3RyaW5nfSBEaXNwbGF5TmFtZVxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbG9nZ2VkIGluXG4gKi9cbiAgQENvcmRvdmEoKVxuICBjYWxsKGFkZHJlc3M6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5ndXAgdGhlIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2FsbCBpcyB0ZXJtaW5hdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhbmd1cCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBNdXRlIHRoZSBtaWNyb3Bob25lXG4gICAqIEBwYXJhbSBtdXRlZCB7Ym9vbGVhbn0gTXV0ZWQgXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG1pYyBpcyBtdXRlZC9lbmFibGVkXG4gICAqL1xuICAgQENvcmRvdmEoKVxuICAgc2V0TWljcm9waG9uZU11dGVkKG11dGVkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgc3BlYWtlclxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn0gU3BlYWtlciBzdGF0ZSBcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFrZXIgaXMgZW5hYmxlZC9kaXNhYmxlZFxuICAgKi9cbiAgIEBDb3Jkb3ZhKClcbiAgIHNldFNwZWFrZXJFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0UGVybWlzc2lvbnMgZm9yIHRoZSBwbHVnaW4gKFJFQ09SRF9BVURJTylcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIFBlcm1pc3Npb25zIGhhdmUgYmVlbiByZXF1ZXN0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBPbkNhbGxTdGF0ZUNoYW5nZWQ6IGlzIGNhbGxlZCB3aGVuIHRoZSBjYWxsIHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8Q2FsbFN0YXRlPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgY2FsbCBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25DYWxsU3RhdGVDaGFuZ2VkKCk6IE9ic2VydmFibGU8Q2FsbFN0YXRlPiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBPblJlZ2lzdHJhdGlvblN0YXRlQ2hhbmdlZDogaXMgY2FsbGVkIHdoZW4gdGhlIHJlZ2lzdHJhdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFJlZ2lzdHJhdGlvblN0YXRlPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiBhIHRoZSByZWdpc3RyYXRpb24gc3RhdGUgaGFzIGNoYW5nZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uUmVnaXN0cmF0aW9uU3RhdGVDaGFuZ2VkKCk6IE9ic2VydmFibGU8UmVnaXN0cmF0aW9uU3RhdGU+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=