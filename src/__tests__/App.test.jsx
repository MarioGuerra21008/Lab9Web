import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Calculadora', () => {
  it('Debe hacer operaciones combinadas', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('70.517647')).toBeInTheDocument();
  });

  it('debe mostrar "ERROR" cuando el resultado es negativo', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('ERROR')).toBeInTheDocument();
  });

  it('no debe permitir que se ingresen más de 9 caracteres', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('0'));
    expect(screen.getByText('123456789')).toBeInTheDocument();
  });

  it('Al hacer divisiones con varios decimales o periódicas, los resultados son de 9 caracteres', () => {
    render(<App />);
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('10.166666')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Clear'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('3.2857143')).toBeInTheDocument();
  });
});
