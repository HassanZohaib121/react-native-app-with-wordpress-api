// app.config.js

// module.exports = {
//     android: {
//         config: {
//             package: 'com.ilaahi.app',
//             permissions: ['INTERNET', 'CAMERA', 'Phone'],
//         },
//     },
// };

module.exports = {
    expo: {
        name: "ilaahi",
        slug: "ilaahi",
        version: "1.0.0",
        scheme: "your-app-scheme",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
            experiments: {
                typedRoutes: true
            }
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            package: "com.ilaahi.app"
        },
        web: {
            favicon: "./assets/favicon.png"
        },
        plugins: ["expo-router", "expo-font"],
        extra: {
            router: {
                origin: false
            },
            eas: {
                projectId: "352093fd-95e9-4033-adbf-b8a390cadad8"
            }
        },
        updates: {
            "url": "https://u.expo.dev/352093fd-95e9-4033-adbf-b8a390cadad8"
        },
        runtimeVersion: {
            "policy": "appVersion"
        }
    }
};
