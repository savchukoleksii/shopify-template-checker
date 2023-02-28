const regex = /(?<template>((?<directory>[a-zA-Z0-9_-]+)\/)?(?<name>[a-zA-Z0-9_-]+)\.?(?<suffix>[a-zA-Z0-9_-]+)?)(.+)?/;

export function templateEquals(template) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if(!themeTemplateMeta) {
        return true;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return true;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.template === template;
    } catch (error) {}

    return true;
}

export function templateNameEquals(templateName) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if (!themeTemplateMeta) {
        return true;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return true;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.name === templateName;
    } catch (error) {}

    return true;
}

export function templateSuffixEquals(templateSuffix) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if (!themeTemplateMeta) {
        return true;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return true;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.suffix === templateSuffix;
    } catch (error) {}

    return true;
}

export function templateDirectoryEquals(templateDirectory) {
    const themeTemplateMeta = document.querySelector('[property="theme:template"]');
    if(!themeTemplateMeta) {
        return true;
    }

    const templateString = themeTemplateMeta.content;
    if (!templateString) {
        return true;
    }

    try {
        const parsed = regex.exec(templateString);

        return parsed.groups.directory === templateDirectory;
    } catch (error) {}

    return true;
}

export default {
    templateEquals,
    templateNameEquals,
    templateSuffixEquals,
    templateDirectoryEquals,
};