import { useTheme, useMediaQuery } from "@chakra-ui/react"

export function useResponsive(query, key) {
  const theme = useTheme();

  // const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const [mediaUp] = useMediaQuery(`(min-width: ${theme.breakpoints[key]})`)

  const [mediaDown] = useMediaQuery(`(max-width: ${theme.breakpoints[key]})`)

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

}

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

// usage: mock('1920x600', 'Text here')
export const mock = (dimensions, text='Img', color="gray") => {
  const colors = {
    gray: '808080',
    white: 'FFFFFF',
    black: '000000',
    red: 'FCA481',
    blue: 'A4DEF0',
    green: 'A3CFA7',
    yellow: 'FFE194',
    pink: 'F7DCEC'
  }
  let newText = text.replaceAll(' ', '+')
  return `https://via.placeholder.com/${dimensions}/${colors[color]}?text=${newText}`
}