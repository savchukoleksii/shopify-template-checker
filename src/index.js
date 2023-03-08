const regex = /(?<template>((?<directory>[a-zA-Z0-9_-]+)\/)?(?<name>[a-zA-Z0-9_-]+)\.?(?<suffix>[a-zA-Z0-9_-]+)?)(.+)?/;

export function templateEquals(template) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if (!themeTemplateMeta) {
        return false;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return false;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.template === template;
    } catch (error) {}

    return false;
}

export function templateNameEquals(templateName) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if (!themeTemplateMeta) {
        return false;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return false;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.name === templateName;
    } catch (error) {}

    return false;
}

export function templateSuffixEquals(templateSuffix) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if (!themeTemplateMeta) {
        return false;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return false;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.suffix === templateSuffix;
    } catch (error) {}

    return false;
}

export function templateDirectoryEquals(templateDirectory) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if(!themeTemplateMeta) {
        return false;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return false;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.directory === templateDirectory;
    } catch (error) {}

    return false;
}

export function isShopifyProxy(url = '') {
    return [
        `/community/${url}`,
        `/apps/${url}`,
        `/a/${url}`,
        `/tools/${url}`,
    ].map((path) => {
        return [
            window.location.pathname.includes(path),
            window.location.pathname.startsWith(path),
        ].includes(true);
    }).includes(true);
}

export function isShopifyPolicyPage(url = '') {
    return [
        `/polices/${url}`
        `/policies/${url}`,
    ].map((path) => {
        return [
            window.location.pathname.includes(path),
            window.location.pathname.startsWith(path),
        ].includes(true);
    }).includes(true);
}

export function templateShopifyRefundPolicy() {
    return isShopifyPolicyPage("refund-policy");
}

export function templateShopifyPrivacyPolicy() {
    return isShopifyPolicyPage("privacy-policy");
}

export function templateShopifyTermsOfService() {
    return isShopifyPolicyPage("terms-of-service");
}

export function templateShopifyShippingPolicy() {
    return isShopifyPolicyPage("shipping-policy");
}

export function templateCaptcha() {
    return [
        window.location.pathname.includes("/challenge"),
        window.location.pathname.startsWith("/challenge"),
    ].includes(true);
}

export function templateChallenge() {
    return templateCaptcha();
}

export default {
    templateEquals,
    templateNameEquals,
    templateSuffixEquals,
    templateDirectoryEquals,
    isShopifyProxy,
    isShopifyPolicyPage,
    templateShopifyRefundPolicy,
    templateShopifyPrivacyPolicy,
    templateShopifyTermsOfService,
    templateShopifyShippingPolicy,
    templateCaptcha,
    templateChallenge,
};