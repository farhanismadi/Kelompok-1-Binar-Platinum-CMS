const initialState = {
  data: [],
  detail: null,
  loading: false,
  isTable: {
    name: "",
    category: "",
    isRented: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    pageSize: 30,
  },
  formState: {
    name: "",
    category: "",
    isRented: "",
    price: "",
    image: "",
  },
  barChart: [],
  page: 1,
  pageSize: 10,
  pageCount: 100,
  count: 1000,
  orders: {
    id: "",
    total_price: "",
    start_rent_at: "",
    finish_rent_at: "",
    status: "",
    slip: "",
    UserId: "",
    CarId: "",
    User: {
      id: "",
      email: "",
      role: "",
    },
    Car: {
      id: "",
      name: "",
      category: "",
      price: "",
      status: "",
      start_rent_at: "",
      finish_rent_at: "",
      image: "",
      createdAt: "",
      updateAt: "",
    },
  },
};

export const dataList = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_GET_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "REQUEST_GET_DATA_DETAIL":
      return {
        ...state,
      };
    case "GET_DATA_DETAIL":
      return {
        ...state,
        detail: action.payload,
        formState: {
          name: action.payload.name,
          category: action.payload.category,
          isRented: action.payload.status,
          price: action.payload.price,
          image: action.payload.image,
        },
      };
    case "LINE_CHART":
      return {
        ...state,
        lineChart: action.payload,
      };
    case "BAR_CHART":
      return {
        ...state,
        barChart: action.payload,
      };
    case "LIST_CAR":
      return {
        ...state,
        detail: action.payload,
        orders: {
          User: {
            email: action.payload.email,
          },
          Car: {
            name: action.payload.name,
            start_rent_at: action.payload.start_rent_at,
            finish_rent_at: action.payload.finish_rent_at,
            price: action.payload.price,
            category: action.payload.category,
          },
        },
      };
    default:
      return {
        ...state,
      };
  }
};
