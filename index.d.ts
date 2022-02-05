import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare enum CallState {
    OutgoingInit = "OutgoingInit",
    OutgoingProgress = "OutgoingProgress",
    OutgoingRinging = "OutgoingRinging",
    Connected = "Connected",
    Resuming = "Resuming",
    Ended = "Ended",
    Error = "Error"
}
export declare enum RegistrationState {
    None = "None",
    Cleared = "Cleared",
    Failed = "Failed",
    Ok = "Ok",
    Progress = "Progress"
}
/**
 * @name SipCall
 * @description
 * This lets you make calls using SIP
 *
 * @usage
 * ```typescript
 * import { SipCall } from '@awesome-cordova-plugins/sip-call';
 *
 *
 * constructor(private sipCall: SipCall) { }
 *
 * ...
 *
 *
 * this.sipCall.login('username', 'P@sswo0rd', 'test-realm.com');
 *
 * ```
 */
export declare class SipCallOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Login with your VoIP provider
     * @param username {string} Username
     * @param password {string} Password
     * @param realm {string} Realm to connect to
     * @return {Promise<any>} Returns a promise that resolves when logged in
     */
    login(username: string, password: string, realm: string): Promise<any>;
    /**
     * Logout from your VoIP provider
     * @return {Promise<any>} Returns a promise that resolves when logged out
     */
    logout(): Promise<any>;
    /**
   * Call with your VoIP provider
   * @param address {string} Address
   * @param displayName {string} DisplayName
   * @return {Promise<any>} Returns a promise that resolves when logged in
   */
    call(address: string, displayName: string): Promise<any>;
    /**
     * Hangup the call
     * @return {Promise<any>} Returns a promise that resolves when call is terminated
     */
    hangup(): Promise<any>;
    /**
     * Mute the microphone
     * @param muted {boolean} Muted
     * @return {Promise<any>} Returns a promise that resolves when mic is muted/enabled
     */
    setMicrophoneMuted(muted: boolean): Promise<any>;
    /**
     * Enables the speaker
     * @param enabled {boolean} Speaker state
     * @return {Promise<any>} Returns a promise that resolves when the speaker is enabled/disabled
     */
    setSpeakerEnabled(enabled: boolean): Promise<any>;
    /**
     * RequestPermissions for the plugin (RECORD_AUDIO)
     * @return {Promise<any>} Returns a promise that resolves Permissions have been requested
     */
    requestPermissions(): Promise<any>;
    /**
     * OnCallStateChanged: is called when the call state has changed
     * @return {Observable<CallState>} Returns an Observable that emits when the call state has changed
     */
    onCallStateChanged(): Observable<CallState>;
    /**
     * OnRegistrationStateChanged: is called when the registration state has changed
     * @return {Observable<RegistrationState>} Returns an Observable that emits when a the registration state has changed
     */
    onRegistrationStateChanged(): Observable<RegistrationState>;
}

export declare const SipCall: SipCallOriginal;