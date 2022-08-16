import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { MapComponent } from 'components';
import * as Constants from 'constants/mapConstants';

const Wrapper = styled.div``;

const MapContainer = () => {
    const [mapObj, setMapObj] = useState('');
    const [markers, setMarkers] = useState([]);

    const singleSearchRes = useSelector(state => state.search.singleSearchRes);

    /* 마커 출력 관리 */
    const showMarker = place => {
        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(place.y, place.x),
            clickable: true,
        });
        marker.setMap(mapObj);
        setMarkers(el => el.concat(marker));
    };

    const removeMarker = () => {
        markers.forEach(el => el.setMap(null));
    };

    /* 중심 좌표 설정 */
    const setCenter = index => {
        if (singleSearchRes[index] !== undefined) {
            mapObj.setCenter(
                new kakao.maps.LatLng(
                    singleSearchRes[index].y,
                    singleSearchRes[index].x,
                ),
            );
        }
    };

    const initMap = async () => {
        const mapOptions = {
            center: new kakao.maps.LatLng(
                Constants.POSITION_LAT_CDNT,
                Constants.POSITION_LNG_CDNT,
            ),
            level: 8,
        };
        const container = document.getElementById('map');
        const initMapObj = new kakao.maps.Map(container, mapOptions);
        setMapObj(initMapObj);
    };

    /* global Kakao */
    useEffect(() => {
        Kakao.init(process.env.REACT_APP_API_KEY_KAKAO_MAP);
    }, []);

    /* global kakao */
    useEffect(() => {
        /* 카카오맵 */
        const script = document.createElement('script');
        script.onload = () => kakao.maps.load(initMap);
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

    return (
        <Wrapper>
            <MapComponent />
        </Wrapper>
    );
};

export default MapContainer;
