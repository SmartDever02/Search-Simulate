import { ChangeEvent, useEffect, useState } from 'react';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from 'components/SearchInput';

describe('Search Input', () => {
  var query = '';
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'query') {
      query = value;
    }
  };

  beforeEach(() => {
    render(<SearchInput onChange={changeHandler} query={query} />);
  });

  it('search input onchange event with correct input name', () => {
    const input: HTMLInputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, {
      target: { name: 'query', value: 'happy coding' },
    });

    expect(query).toBe('happy coding');
  });

  it('search input onchange event with wrong input name', () => {
    const input: HTMLInputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(input, {
      target: { name: 'not query', value: 'bad coding' },
    });

    // still happy coding
    expect(query).toBe('happy coding');
  });
});
