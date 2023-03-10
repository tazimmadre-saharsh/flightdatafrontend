import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"

import "./App.css"

export default function EditArrival() {

    const [error, setError] = useState();

    const [loading, setLoading] = useState();

    const navigate = useNavigate();

    
}