import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HelpArea from './HelpArea';

// Mock HelpBox to simplify testing
vi.mock('./HelpBox', () => ({
    default: ({ title, text }) => (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    ),
}));

describe('HelpArea', () => {
    it('renders the help area section', () => {
        render(<HelpArea />);
        const section = screen.getByTestId('help-area');
        expect(section).toBeInTheDocument();
    });

    it('renders all help items', () => {
        render(<HelpArea />);
        expect(screen.getByText('What is Git?')).toBeInTheDocument();
        expect(screen.getByText('What is GitHub?')).toBeInTheDocument();
        expect(screen.getByText('What is GitHub Actions?')).toBeInTheDocument();
    });

    it('renders correct help item texts', () => {
        render(<HelpAre />);
        expect(
            screen.getByText(
                'Git is a version control system, helping you to manage your code and create code snapshots.'
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'GitHub is a company and online offering, providing you with tons of Git-related services (e.g., cloud repositories).'
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'GitHub Actions is an automation service (or CI / CD service) that helps you automate repository-related workflows and processes.'
            )
        ).toBeInTheDocument();
    });
});

// We recommend installing an extension to run vitest tests.