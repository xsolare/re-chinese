import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';
import {
  HieroglyphStyledHTML,
  PinyinStyledHTML,
  TextTabStyledHTML,
  TranslateStyledHTML
} from '#/styles/common';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'span') {
      const { type } = attributesToProps(domNode.attribs);

      if (type === 'h') {
        return (
          <HieroglyphStyledHTML>
            <span>{domToReact(domNode.children, optionsForGlossary)}</span>
          </HieroglyphStyledHTML>
        );
      }
      if (type === 'p') {
        return (
          <PinyinStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</PinyinStyledHTML>
        );
      }
      if (type === 't') {
        return (
          <TranslateStyledHTML>
            {domToReact(domNode.children, optionsForGlossary)}
          </TranslateStyledHTML>
        );
      }
    }

    if (domNode instanceof Element && domNode.name === 'p') {
      const { type } = attributesToProps(domNode.attribs);

      if (type === 'tab') {
        return (
          <TextTabStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</TextTabStyledHTML>
        );
      }
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);
