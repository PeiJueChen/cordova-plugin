#import <Cordova/CDV.h>

@interface CPTemplate : CDVPlugin

- (void)echo : (CDVInvokedUrlCommand*)command;
- (void)openUrl : (CDVInvokedUrlCommand*)command;
@end