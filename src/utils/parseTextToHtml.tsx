import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';
import type { ITooltipProps } from '#/components/xsolare';
import {
  ExampleStyledHTML,
  HieroglyphStyledHTML,
  HieroglyphTitleStyledHTML,
  PinyinStyledHTML,
  TextTabStyledHTML,
  TranslateStyledHTML,
  WarnStyledHTML
} from '#/styles/common';
import { Tooltip } from '#/components/xsolare';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const { name } = domNode;
      const { type, index, pinyin } = attributesToProps(domNode.attribs);

      if (name === 'span') {
        if (type === 'h') {
          const Hieroglyph = (
            <HieroglyphStyledHTML>
              <span>{domToReact(domNode.children, optionsForGlossary)}</span>
            </HieroglyphStyledHTML>
          );

          if (pinyin) {
            const tooltip: ITooltipProps = { title: pinyin, delay: 100, placement: 'top' };

            return <Tooltip {...tooltip}>{Hieroglyph}</Tooltip>;
          }

          return Hieroglyph;
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

      if (name === 'p') {
        if (type === 'tab') {
          return (
            <TextTabStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TextTabStyledHTML>
          );
        }
        if (type === 'warn') {
          return (
            <WarnStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</WarnStyledHTML>
          );
        }
      }

      if (name === 'div') {
        if (type === 'h') {
          return (
            <HieroglyphTitleStyledHTML>
              <span>{index}</span>
              {domToReact(domNode.children, optionsForGlossary)}
            </HieroglyphTitleStyledHTML>
          );
        }
        if (type === 'example') {
          return (
            <ExampleStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </ExampleStyledHTML>
          );
        }
      }
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);
