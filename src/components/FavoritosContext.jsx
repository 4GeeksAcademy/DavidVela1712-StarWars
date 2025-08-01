import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

export const useFavorites = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorites = (uid, name, type) => {
        const existe = favorites.find(fav => fav.uid == uid && fav.type == type);
        if (!existe) {
            setFavorites([...favorites, {
                uid: uid,
                name: name,
                type: type
            }])
        }
    }

    const deleteFavorite = (uid, type) => {
        setFavorites(
            favorites.filter((fav) => {
                return !(fav.uid === uid && fav.type === type)
            })
        )
    }

    const isFavorited = (uid, type) => {
        return favorites.find(fav => fav.uid == uid && fav.type == type);
    }

    return (
        <FavoritosContext value={{ favorites, addFavorites, deleteFavorite, isFavorited }}>
            {children}
        </FavoritosContext>
    )
}