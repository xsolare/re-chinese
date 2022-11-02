import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';
import type { ITooltipProps } from '#/components/xsolare';
import {
  ExampleStyledHTML,
  HieroglyphStyledHTML,
  HieroglyphTitleStyledHTML,
  HrStyledHTML,
  TextTabStyledHTML,
  TextStyledHTML,
  TranslateStyledHTML,
  WarnStyledHTML,
  RuleStyledHTML
} from '#/styles/common';
import { Tooltip } from '#/components/xsolare';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const { name } = domNode;
      const { type, ...rest } = attributesToProps(domNode.attribs);

      if (name === 'span') {
        if (type === 'h') {
          const { p, t } = rest;
          const tooltip: ITooltipProps = { title: p ?? '', delay: 100, placement: 'top' };

          const Hieroglyph = (
            <HieroglyphStyledHTML>
              <Tooltip {...tooltip}>
                <span className="hieroglyph">
                  {domToReact(domNode.children, optionsForGlossary)}
                </span>
              </Tooltip>
              {t ? <TranslateStyledHTML> - {t}</TranslateStyledHTML> : null}
            </HieroglyphStyledHTML>
          );

          return Hieroglyph;
        }
        if (type === 'tab') {
          return (
            <TextTabStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TextTabStyledHTML>
          );
        }
        if (type === 'text') {
          return (
            <TextStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</TextStyledHTML>
          );
        }
        if (type === 'warn') {
          return (
            <WarnStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</WarnStyledHTML>
          );
        }
        if (type === 'rule') {
          return (
            <RuleStyledHTML>
              <span>{domToReact(domNode.children, optionsForGlossary)}</span>
            </RuleStyledHTML>
          );
        }
      }

      if (name === 'div') {
        if (type === 'h') {
          const { index, p, t } = rest;

          return (
            <HieroglyphTitleStyledHTML>
              <span>{index}</span>
              <h2>{domToReact(domNode.children, optionsForGlossary)}</h2>
              <div>
                <span>{p}</span>
                <span>{t}</span>
              </div>
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

      if (name === 'hr') {
        return <HrStyledHTML />;
      }
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);
