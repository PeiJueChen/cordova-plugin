#import <Cordova/CDVPlugin.h>

@interface Custom : CDVPlugin

- (void)echo : (CDVInvokedUrlCommand*)command;
- (void)openUrl : (CDVInvokedUrlCommand*)command;
@end