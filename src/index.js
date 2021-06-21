const regex = /(?<template>((?<directory>[a-zA-Z0-9_-]+)\/)?(?<name>[a-zA-Z0-9_-]+)\.?(?<suffix>[a-zA-Z0-9_-]+)?)(.+)?/;

const themeTemplateMeta = document.querySelector('[property="theme:template"]');
if(!themeTemplateMeta) {
    throw Error("template meta tag does not exist")
}

const templateString    = themeTemplateMeta.content;
const parsed            = regex.exec(templateString).groups;

export function templateEquals(template) {
    return parsed.template === template;
}

export function templateNameEquals(templateName) {
    return parsed.name === templateName;
}

export function templateSuffixEquals(templateSuffix) {
    return parsed.suffix === templateSuffix;
}

export function templateDirectoryEquals(templateDirectory) {
    return parsed.directory === templateDirectory;
}

export default {
    templateEquals,
    templateNameEquals,
    templateSuffixEquals,
    templateDirectoryEquals,
};