import React from 'react';

import {
  StyledTabs,
  StyledList,
  StyledTrigger,
  StyledContent,
} from './Tabs.styles';
import type { TabsProps, TabsItemProps } from './Tabs.types';

const Tabs = ({ children, defaultTab = 0 }: TabsProps) => {
  if (!Array.isArray(children)) {
    return <div className="Tabs">{children}</div>;
  }

  return (
    <StyledTabs defaultValue={defaultTab.toString()}>
      <StyledList>
        {React.Children.map(
          children,
          (child: React.ReactElement<TabsItemProps>, i: number) => {
            return (
              <StyledTrigger value={i.toString()}>
                {child.props.title}
              </StyledTrigger>
            );
          }
        )}
      </StyledList>

      {React.Children.map(
        children,
        (child: React.ReactElement<TabsItemProps>, i: number) => {
          return (
            <StyledContent value={i.toString()} key={i}>
              {child.props.children}
            </StyledContent>
          );
        }
      )}
    </StyledTabs>
  );
};

const TabsItem = ({ title, children }: TabsItemProps) => {
  return children;
};

Tabs.Item = TabsItem;

export default Tabs;
