const benchmarkData = {
  "basic_features/char_backtracking": "5.04",
  "basic_features/char_backtracking_greddy_quantifier_max": "3.72",
  "basic_features/char_backtracking_greedy_quantifier_min": "6.19",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "4.97",
  "basic_features/char_backtracking_lazy_quantifier_max": "1.21",
  "basic_features/char_backtracking_lazy_quantifier_min": "5.67",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "5.05",
  "basic_features/char_class_any": "0.12",
  "basic_features/char_class_digit": "0.17",
  "basic_features/char_class_digit_negated": "0.21",
  "basic_features/char_class_space": "0.17",
  "basic_features/char_class_space_negated": "0.21",
  "basic_features/char_class_word": "0.18",
  "basic_features/char_class_word_negated": "0.15",
  "basic_features/char_disjunction": "0.25",
  "basic_features/char_non_greedy_backtracking": "4.02",
  "basic_features/char_non_greedy_min": "4.33",
  "basic_features/char_quantifier": "6.40",
  "basic_features/char_sets": "0.19",
  "basic_features/char_sets_ignoreCase": "0.30",
  "basic_features/char_sets_invert": "0.18",
  "basic_features/char_sets_quantifier": "7.05",
  "basic_features/dot_matchall": "0.19",
  "basic_features/end_anchor": "0.73",
  "basic_features/end_anchor_multiline": "0.52",
  "basic_features/group_backreference": "4.49",
  "basic_features/group_backtracking": "2.69",
  "basic_features/groups_disjunctions": "1.71",
  "basic_features/groups_disjunctions_backtracking": "4.54",
  "basic_features/groups_non_capturing": "1.05",
  "basic_features/groups_quantifiers": "9.63",
  "basic_features/groups_simple": "1.87",
  "basic_features/lookahead_negative": "0.94",
  "basic_features/lookahead_positive": "1.60",
  "basic_features/lookbehind_negative": "0.84",
  "basic_features/lookbehind_positive": "1.43",
  "basic_features/non_greedy_star_match": "2.56",
  "basic_features/non_word_boundry": "0.72",
  "basic_features/set_backtracking": "3.73",
  "basic_features/single_chars": "0.53",
  "basic_features/single_chars_ignoreCase": "0.29",
  "basic_features/start_anchor": "0.44",
  "basic_features/start_anchor_multiline": "0.46",
  "basic_features/unicode_4byte": "0.29",
  "basic_features/unicode_any": "0.42",
  "basic_features/unicode_feature": "0.71",
  "basic_features/unicode_lookbehind": "1.06",
  "basic_features/word_boundry": "0.44",
  "common_regex/alphanumeric_with_space": "3.53",
  "common_regex/alphanumeric_without_space": "2.68",
  "common_regex/date_day_first_num": "15.98",
  "common_regex/date_day_first_str": "20.91",
  "common_regex/date_year_first_dash": "7.73",
  "common_regex/email1": "8.31",
  "common_regex/email2": "6.40",
  "common_regex/html_tag": "2.37",
  "common_regex/ipv4": "5.78",
  "common_regex/ipv4_and_ipv6": "9.77",
  "common_regex/ipv6": "22.77",
  "common_regex/js_handler": "11.35",
  "common_regex/js_handler_with_element": "6.92",
  "common_regex/numbers_decimal": "3.27",
  "common_regex/numbers_negative_positive_decimal": "5.28",
  "common_regex/numbers_whole": "2.67",
  "common_regex/numbers_whole_and_decimal": "4.11",
  "common_regex/numbers_whole_decimal_fractions": "7.47",
  "common_regex/password_complex": "11.14",
  "common_regex/password_moderate": "19.47",
  "common_regex/phone_number": "18.38",
  "common_regex/search_duplicates": "16.68",
  "common_regex/slug": "6.67",
  "common_regex/time_0_12h_optional_zero_ampm": "5.27",
  "common_regex/time_1_12h_optional_zero": "20.25",
  "common_regex/time_2_24h_zero": "2.65",
  "common_regex/time_3_24h_optional_zero": "3.22",
  "common_regex/time_4_24h_with_seconds": "3.09",
  "common_regex/url_http": "12.64",
  "common_regex/url_protocol_optional": "15.15",
  "common_regex/username": "3.78",
  "etherpad/ep_ops": "5.11"
};