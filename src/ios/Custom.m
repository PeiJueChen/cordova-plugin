#import "Custom.h"
#import <Cordova/CDVPluginResult.h>

@implementation Custom

- (void)echo:(CDVInvokedUrlCommand*)command
{
    NSString* callbackId = [command callbackId];
    NSString* msg = [NSString stringWithFormat: @"Echo: %@", [[command arguments] objectAtIndex:0]];

    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:msg];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)openUrl : (CDVInvokedUrlCommand*)command
{
    NSString* callbackId = [command callbackId];
    NSString* msg = [NSString stringWithFormat: @"Echo: %@", [[command arguments] objectAtIndex:0]];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:msg];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
