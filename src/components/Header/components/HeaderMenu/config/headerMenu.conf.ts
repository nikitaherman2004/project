export type MenuItemProps = {
    id: number;
    label: string;
    onClick: () => void;
};

export const configureMenu = (onMenuClose: () => void): MenuItemProps[] => [
    {
        id: 1,
        label: 'Главная',
        onClick: () => {
            onMenuClose();
        },
    },
    {
        id: 2,
        label: 'Профиль',
        onClick: () => {
            onMenuClose();
        },
    },
];