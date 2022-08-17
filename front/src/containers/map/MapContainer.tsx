import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MapComponent } from 'components';
import * as Constants from 'constants/mapConstants';
import { RootState } from 'modules';

type Map = {
    setCenter: (latlng: object) => void;
};

type Marker = {
    setMap: (mapObj: object) => void;
};

type Place = {
    id: number | null;
    place_name: string | null;
    category_name: string | null;
    y: number | null;
    x: number | null;
    address_name: string | null;
    phone: string | null;
};

const MapContainer = () => {
    const [mapObj, setMapObj] = useState<Map>();
    const [markers, setMarkers] = useState<Marker[]>([]);

    const singleSearchRes = useSelector(
        (state: RootState) => state.search.singleSearchRes,
    );

    /* 마커 출력 관리 */
    const showMarker = (place: Place) => {
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
        if (singleSearchRes[index] !== undefined) {
            mapObj.setCenter(
                new window.kakao.maps.LatLng(
                    singleSearchRes[index].y,
                    singleSearchRes[index].x,
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
            level: 8,
        };
        const container = document.getElementById('map');
        const initMapObj = new window.kakao.maps.Map(container, mapOptions);
        setMapObj(initMapObj);
    };

    useEffect(() => {
        window.Kakao.init(process.env.REACT_APP_API_KEY_KAKAO_MAP);
    }, []);

    useEffect(() => {
        /* 카카오맵 */
        const script = document.createElement('script');
        script.onload = () => window.kakao.maps.load(initMap);
        script.src =
            Constants.KAKAO_MAP_API_URL +
            process.env.REACT_APP_API_KEY_KAKAO_MAP +
            Constants.KAKAO_MAP_API_SERVICES;
        document.head.appendChild(script);
    }, []);

    /* 식당 검색 */
    useEffect(() => {
        if (singleSearchRes.length) {
            removeMarker();
            setMarkers([]);
            setCenter(0);
            singleSearchRes.forEach(res => showMarker(res));
        }
    }, [singleSearchRes]);

    return <MapComponent />;
};

export default MapContainer;
