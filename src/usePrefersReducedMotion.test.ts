import { renderHook, act } from '@testing-library/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

describe('usePrefersReducedMotion', () => {
  const mockMatchMedia = (matches: boolean) => {
    return {
      matches,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return false when prefers-reduced-motion is not set', () => {
    window.matchMedia = vi.fn().mockImplementation(() => mockMatchMedia(false));

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it('should return true when prefers-reduced-motion: reduce is set', () => {
    window.matchMedia = vi.fn().mockImplementation(() => mockMatchMedia(true));

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it('should update the value when the media query changes', () => {
    let changeCallback: () => void;

    // Mock matchMedia to capture the callback passed to addEventListener
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn((event, cb) => {
        if (event === 'change') changeCallback = cb;
      }),
      removeEventListener: vi.fn(),
    }));

    const { result } = renderHook(() => usePrefersReducedMotion());

    // Initial state
    expect(result.current).toBe(false);

    // Simulate the change in system preference
    window.matchMedia = vi.fn().mockImplementation(() => mockMatchMedia(true));

    // Trigger the callback captured earlier
    act(() => {
      changeCallback();
    });

    expect(result.current).toBe(true);
  });

  it('should clean up the event listener on unmount', () => {
    const removeEventListenerSpy = vi.fn();
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: removeEventListenerSpy,
    }));

    const { unmount } = renderHook(() => usePrefersReducedMotion());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('change', expect.any(Function));
  });
});
