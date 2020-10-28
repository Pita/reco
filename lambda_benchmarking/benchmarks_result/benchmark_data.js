const benchmarkData = {
  "basic_features/char_backtracking": "3.25",
  "basic_features/char_backtracking_greddy_quantifier_max": "2.64",
  "basic_features/char_backtracking_greedy_quantifier_min": "4.03",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "3.55",
  "basic_features/char_backtracking_lazy_quantifier_max": "1.40",
  "basic_features/char_backtracking_lazy_quantifier_min": "3.56",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "3.68",
  "basic_features/char_class_any": "0.19",
  "basic_features/char_class_digit": "0.18",
  "basic_features/char_class_digit_negated": "0.21",
  "basic_features/char_class_space": "0.17",
  "basic_features/char_class_space_negated": "0.21",
  "basic_features/char_class_word": "0.19",
  "basic_features/char_class_word_negated": "0.16",
  "basic_features/char_disjunction": "0.24",
  "basic_features/char_non_greedy_backtracking": "2.48",
  "basic_features/char_non_greedy_min": "3.69",
  "basic_features/char_quantifier": "3.64",
  "basic_features/char_sets": "0.20",
  "basic_features/char_sets_ignoreCase": "0.34",
  "basic_features/char_sets_invert": "0.17",
  "basic_features/char_sets_quantifier": "4.55",
  "basic_features/dot_matchall": "0.19",
  "basic_features/end_anchor": "0.76",
  "basic_features/end_anchor_multiline": "0.50",
  "basic_features/group_backreference": "3.10",
  "basic_features/group_backtracking": "1.89",
  "basic_features/groups_disjunctions": "2.40",
  "basic_features/groups_disjunctions_backtracking": "4.84",
  "basic_features/groups_non_capturing": "1.12",
  "basic_features/groups_quantifiers": "5.83",
  "basic_features/groups_simple": "1.78",
  "basic_features/lookahead_negative": "0.93",
  "basic_features/lookahead_positive": "1.62",
  "basic_features/lookbehind_negative": "0.84",
  "basic_features/lookbehind_positive": "1.44",
  "basic_features/non_greedy_star_match": "1.86",
  "basic_features/non_word_boundry": "0.68",
  "basic_features/set_backtracking": "2.93",
  "basic_features/single_chars": "0.55",
  "basic_features/single_chars_ignoreCase": "0.43",
  "basic_features/start_anchor": "0.39",
  "basic_features/start_anchor_multiline": "0.46",
  "basic_features/unicode_4byte": "0.44",
  "basic_features/unicode_any": "0.42",
  "basic_features/unicode_feature": "0.74",
  "basic_features/unicode_lookbehind": "1.07",
  "basic_features/word_boundry": "0.57",
  "common_regex/alphanumeric_with_space": "2.26",
  "common_regex/alphanumeric_without_space": "1.69",
  "common_regex/date_day_first_num": "16.68",
  "common_regex/date_day_first_str": "20.96",
  "common_regex/date_year_first_dash": "5.84",
  "common_regex/email1": "5.62",
  "common_regex/email2": "4.90",
  "common_regex/html_tag": "2.54",
  "common_regex/ipv4": "5.43",
  "common_regex/ipv4_and_ipv6": "9.97",
  "common_regex/ipv6": "13.65",
  "common_regex/js_handler": "8.34",
  "common_regex/js_handler_with_element": "7.85",
  "common_regex/numbers_decimal": "1.88",
  "common_regex/numbers_negative_positive_decimal": "3.56",
  "common_regex/numbers_whole": "1.62",
  "common_regex/numbers_whole_and_decimal": "3.43",
  "common_regex/numbers_whole_decimal_fractions": "5.27",
  "common_regex/password_complex": "7.13",
  "common_regex/password_moderate": "12.60",
  "common_regex/phone_number": "14.65",
  "common_regex/search_duplicates": "10.61",
  "common_regex/slug": "3.17",
  "common_regex/time_0_12h_optional_zero_ampm": "4.48",
  "common_regex/time_1_12h_optional_zero": "14.54",
  "common_regex/time_2_24h_zero": "2.66",
  "common_regex/time_3_24h_optional_zero": "1.96",
  "common_regex/time_4_24h_with_seconds": "2.88",
  "common_regex/url_http": "7.81",
  "common_regex/url_protocol_optional": "8.17",
  "common_regex/username": "3.32",
  "etherpad/ep_ops": "2.71"
};