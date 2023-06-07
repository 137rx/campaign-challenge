import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav';
import { FilterContext } from '../context/FilterContext';

describe('Nav', () => {
  const mockHandleStartDateChange = jest.fn();
  const mockHandleEndDateChange = jest.fn();

  const renderNav = (searchTerm = '', start = '', end = '') => {
    return render(
      <FilterContext.Provider
        value={{
          searchTerm,
          setSearchTerm: jest.fn(),
          start,
          setStart: jest.fn(),
          end,
          setEnd: jest.fn(),
        }}
      >
        <Nav
          handleStartDateChange={mockHandleStartDateChange}
          handleEndDateChange={mockHandleEndDateChange}
        />
      </FilterContext.Provider>
    );
  };

  it('renders without errors', () => {
    renderNav();
  });


  it('toggles the filter section correctly', () => {
    const { getByText, queryByText } = renderNav();
    const filterLabel = getByText('Filter');
    fireEvent.click(filterLabel);
    expect(queryByText('Start Date:')).toBeTruthy();
    expect(queryByText('End Date:')).toBeTruthy();
    fireEvent.click(filterLabel);
    expect(queryByText('Start Date:')).toBeFalsy();
    expect(queryByText('End Date:')).toBeFalsy();
  });
});
