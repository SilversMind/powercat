export const sidebarStyle = {
  position: 'fixed' as const,
  left: 0,
  top: 0,
  height: '100%' as const,
  width: 200,
  backgroundColor: '#333',
  color: '#fff',
} as const;

export const sidebarListStyle = {
  listStyleType: 'none' as const,
  padding: 0,
} as const;

export const sidebarItemStyle = {
  padding: 10,
  cursor: 'pointer' as const,

  '&:hover': {
    backgroundColor: '#555',
  } as const,
} as const;

export const containerStyle = {
  display: 'flex',
} as const;

export const contentStyle = {
  flex: 1,
} as const;