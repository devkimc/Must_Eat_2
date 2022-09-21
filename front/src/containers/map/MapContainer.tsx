import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MapComponent } from 'components';
import * as Constants from 'constants/mapConstants';
import { RootState } from 'store/store';
import { SearchState } from 'store/searchSlice';

type Map = {
    setCenter: (latlng: object) => void;
};

type Marker = {
    setMap: (mapObj: object) => void;
};

const MapContainer = () => {
    const [mapObj, setMapObj] = useState<Map>();
    const [markers, setMarkers] = useState<Marker[]>([]);

    const searchRes = useSelector((state: RootState) => state.search.searchRes);

    /* 마커 출력 관리 */
    const showMarker = (place: SearchState['place']) => {
        const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(place.y, place.x),
            clickable: true,
        });
        marker.setMap(mapObj);
        setMarkers(el => el.concat(marker));
    };

    const removeMarker = () => {
        markers.forEach(el => el.setMap(null));
    };

    /* 중심 좌표 설정 */
    const setCenter = (index: number) => {
        if (searchRes[index] !== undefined) {
            mapObj.setCenter(
                new window.kakao.maps.LatLng(
                    searchRes[index].y,
                    searchRes[index].x,
                ),
            );
        }
    };

    const initMap = async () => {
        const mapOptions = {
            center: new window.kakao.maps.LatLng(
                Constants.POSITION_LAT_CDNT,
                Constants.POSITION_LNG_CDNT,
            ),
            level: 4,
        };
        const container = document.getElementById('map');
        const initMapObj = new window.kakao.maps.Map(container, mapOptions);
        setMapObj(initMapObj);
    };

    useEffect(() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_API_KEY_KAKAO_MAP);
    }, []);

    useEffect(() => {
        /* 카카오맵 */
        const script = document.createElement('script');
        script.onload = () => window.kakao.maps.load(initMap);
        script.src =
            Constants.KAKAO_MAP_API_URL +
            process.env.NEXT_PUBLIC_API_KEY_KAKAO_MAP +
            Constants.KAKAO_MAP_API_SERVICES;
        document.head.appendChild(script);
    }, []);

    /* 식당 검색 */
    useEffect(() => {
        if (searchRes?.length) {
            console.log(`searchRes useEffect`);
            removeMarker();
            setMarkers([]);
            setCenter(0);
            searchRes.forEach(res => showMarker(res));
        }
    }, [searchRes]);

    return <MapComponent />;
};

export default MapContainer;
